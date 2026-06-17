import axios from 'axios';
import { MINIMAL_YEAR, MAXIMAL_YEAR } from './MedicineConsts';
import { MedicinePageModel, SpeData, LimitRank, YearLimitRank } from './MedicineModels';
import { MedicineCookieManager } from './MedicineCookieManager';
import './MedicineModels';

const speDb = (await axios.get("/medicine/nexternat_specalites_db.json")).data; 
const ranksDb = (await axios.get("/medicine/nexternat_rangs_db.json")).data;

export class MedicinePageController {
    getModel() { return this.model; }

    constructor() {
        this.cookieManager = new MedicineCookieManager();
        
        // populate allYearsParticipantCount
        const allYearsParticipantCount = {};
        for(let i = MINIMAL_YEAR; i <= MAXIMAL_YEAR; i++)
            allYearsParticipantCount[i] = 0;
        for (const rankConfig of Object.values(ranksDb)) {
            const rank = rankConfig.rang;
            if (typeof rank === 'string' || rank instanceof String)
                continue;

            allYearsParticipantCount[rankConfig.annee] = Math.max(allYearsParticipantCount[rankConfig.annee], rankConfig.rang);
        }
        
        // get min and max selected years
        const selectedYears = this.cookieManager.getSelectedYears();
        const selectedMinYear = Math.min(selectedYears[0], selectedYears[1]);
        const selectedMaxYear = Math.max(selectedYears[0], selectedYears[1]);

        // populate allSpeData
        const allSpeData = {};
        for (const speConfig of Object.values(speDb)) {
            const state = this.cookieManager.getSpeState(speConfig.id);
            const limitRank = this._createLimitRank(speConfig, allYearsParticipantCount);
            const speData = new SpeData(state, speConfig, limitRank)
            this._updateLimitRankAnalysis(speData, selectedMinYear, selectedMaxYear);

            allSpeData[speConfig.id] = speData;
        }

        this.model = new MedicinePageModel(allSpeData, allYearsParticipantCount, selectedMinYear, selectedMaxYear);
    }

    setSelectedYears(first, second) {
        const selectedMinYear = Math.min(first, second);
        const selectedMaxYear = Math.max(first, second);
        this.model.selectedMinYear = selectedMinYear;
        this.model.selectedMaxYear = selectedMaxYear;
        this.cookieManager.setSelectedYears([selectedMinYear, selectedMaxYear]);
        this._updateAllLimitRankAnalysis(this.model.allSpeData, selectedMinYear, selectedMaxYear);
    }

    setSpeState(speData, state) {
        speData.state = state;
        this.cookieManager.setSpeState(speData.config.id, speData.state);
    }

    _createLimitRank(speConfig, allYearsParticipantCount) {
        const allYearsLimitRank = {}
        for (let year = MINIMAL_YEAR; year <= MAXIMAL_YEAR; year++) {
            allYearsLimitRank[year] = this._createYearLimitRank(speConfig, year, allYearsParticipantCount[year]);
        }
        return new LimitRank(allYearsLimitRank);
    }

    _createYearLimitRank(speConfig, year, yearParticipantCount) {
        let yearRank = 1;
        for (const rankConfig of Object.values(ranksDb)) {
            if(rankConfig.annee != year || rankConfig.specialite != speConfig.specialite)
                continue;
            const rank = rankConfig.rang;
            if (typeof rank === 'string' || rank instanceof String)
                continue;

            yearRank = Math.max(yearRank, rankConfig.rang);
        }
        return new YearLimitRank(yearRank, yearParticipantCount);
    }

    _updateAllLimitRankAnalysis(allSpeData, minYear, maxYear) {
        for (const speData of Object.values(allSpeData)) {
            this._updateLimitRankAnalysis(speData, minYear, maxYear);
        }
    }

    _updateLimitRankAnalysis(speData, minYear, maxYear) {
        let minRankInt = Number.MAX_SAFE_INTEGER;
        let maxRankInt = Number.MIN_SAFE_INTEGER;
        let sumRankInt = 0;
        let minRankPct = 100;
        let maxRankPct = 0;
        let sumRankPct = 0;

        for (let year = minYear; year <= maxYear; year++) {
            const yearLimitRank = speData.limitRank.getYear(year);
            minRankInt = Math.min(minRankInt, yearLimitRank.rankInt);
            maxRankInt = Math.max(maxRankInt, yearLimitRank.rankInt);
            sumRankInt += yearLimitRank.rankInt;
            minRankPct = Math.min(minRankPct, yearLimitRank.rankPct);
            maxRankPct = Math.max(maxRankPct, yearLimitRank.rankPct);
            sumRankPct += yearLimitRank.rankPct;
        }

        const yearDelta = maxYear - minYear + 1;
        speData.limitRankAnalysis.minRankInt = minRankInt;
        speData.limitRankAnalysis.maxRankInt = maxRankInt;
        speData.limitRankAnalysis.middleRankInt = Math.round(sumRankInt / yearDelta);
        speData.limitRankAnalysis.minRankPct = minRankPct;
        speData.limitRankAnalysis.maxRankPct = maxRankPct;
        speData.limitRankAnalysis.middleRankPct = Math.round(sumRankPct / yearDelta);
    }
}