export class MedicinePageModel {
    constructor(allSpeData, allYearsParticipantCount, selectedMinYear, selectedMaxYear) {
        this.allSpeData = allSpeData;
        this.allYearsParticipantCount = allYearsParticipantCount;
        this.selectedMinYear = selectedMinYear;
        this.selectedMaxYear = selectedMaxYear;
    }
}

export class SpeData {
  constructor(state, config, limitRank) {
    this.state = state;
    this.config = config;
    this.limitRank = limitRank;
    this.limitRankAnalysis = new LimitRankAnalyis();
  }
}

export class LimitRankAnalyis {
  constructor() {
    this.minRankInt = -1;
    this.maxRankInt = -1;
    this.middleRankInt = -1;
    this.minRankPct = -1;
    this.maxRankPct = -1;
    this.middleRankPct = -1;
  }
}

export class LimitRank {
  constructor(allYearsLimitRank)
  {
    this.allYearsLimitRank = allYearsLimitRank; 
  }

  getYear(year) {
    return this.allYearsLimitRank[year];
  }

  addYear(year, value) {
    this.allYearsLimitRank[year] = value;
  }
}

export class YearLimitRank {
  constructor(rankInt, participantCount) {
    this.rankInt = rankInt;
    this.rankRatio = this.rankInt / participantCount;
    this.rankPct = Math.round(this.rankRatio * 100);
  }
}