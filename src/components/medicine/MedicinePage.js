import React, {useState, useEffect } from 'react'
import { SpeState, SpeStateName } from './MedicineConsts';
import { MedicinePageController } from './MedicinePageController';
import './MedicinePage.css';

let controller = null;
let model = null;

function GetSpeStateStyleClass(speState){
  return "spe-state-" + SpeStateName[speState].toLowerCase();
}

function SpeStateCheckbox({ speData, wantedSpeState, onChange }){
  const _onChanged = e => {
      onChange(e.target.checked ? wantedSpeState : SpeState.Default);
  }

  return (
    <div className="spe-choice-box-checkbox-container">
      <p>{SpeStateName[wantedSpeState]}</p>
      <input type="checkbox" checked={speData.state == wantedSpeState} onChange={_onChanged}></input>
    </div>
  )
}

function SpeChoiceBox({ speData, onChanged }){
  // const [seed, setSeed] = useState(0);
  const _onChanged = speState => {
            onChanged(speData, speState)
        }

  return (
    <div className={"spe-choice-box " + GetSpeStateStyleClass(speData.state)}>
      <p className="spe-choice-box-title">{speData.config.specialite}</p>
      <SpeStateCheckbox speData={speData} wantedSpeState={SpeState.Like} onChange={_onChanged} />
      <SpeStateCheckbox speData={speData} wantedSpeState={SpeState.Could} onChange={_onChanged} />
      <SpeStateCheckbox speData={speData} wantedSpeState={SpeState.Never} onChange={_onChanged} />
    </div>
  )
}

function YearSelect({ value, onChange }) {
  return (
    <select value={value} onChange={onChange}>
      <option value={"2025"}>2025</option>
      <option value={"2024"}>2024</option>
      <option value={"2023"}>2023</option>
      <option value={"2022"}>2022</option>
      <option value={"2021"}>2021</option>
      <option value={"2020"}>2020</option>
    </select>
  )
}

function SpeLabel({ speData }) {
  return (
    <div className={"spe-label " + GetSpeStateStyleClass(speData.state)}>
      <p>{speData.config.specialite}</p>
      { model.selectedMinYear != model.selectedMaxYear &&
        <div>
          <div>
            <p>Min:{speData.limitRankAnalysis.minRankInt}</p>
            <p>Moy:{speData.limitRankAnalysis.middleRankInt}</p>
            <p>Max:{speData.limitRankAnalysis.maxRankInt}</p>
          </div>
          <div className="rank-limit-pct">
            <p>{speData.limitRankAnalysis.minRankPct}%</p>
            <p>{speData.limitRankAnalysis.middleRankPct}%</p>
            <p>{speData.limitRankAnalysis.maxRankPct}%</p>
          </div>
        </div>
      }
      { model.selectedMinYear == model.selectedMaxYear &&
        <div>
          <div>
            <p>{speData.limitRankAnalysis.minRankInt}</p>
          </div>
          <div>
            <p className='rank-limit-pct'>{speData.limitRankAnalysis.minRankPct}%</p>
          </div>
        </div>
      }
    </div>
  )
}

export default function MedicinePage() {
  const [seed, setSeed] = useState(0);
  useEffect(() => {
    controller = new MedicinePageController();
    model = controller.getModel();
    setSeed(seed + 1)
  }, []);
  const forceUpdate = () => { setSeed(seed + 1); }

  const onSpeChoiceBoxChanged = (speData, speState) => {
    controller.setSpeState(speData, speState)
    forceUpdate();
  }
  const onStartYearChanged = e => {
    controller.setSelectedYears(parseInt(e.target.value), model.selectedMaxYear);
    forceUpdate();
  }
  const onEndYearChanged = e => {
    controller.setSelectedYears(model.selectedMinYear, parseInt(e.target.value));
    forceUpdate();
  }

  const onResetAllButtonClicked = e => {
    controller.setAllSpeState(SpeState.Default);
    forceUpdate();
  }
  const onChooseAllButtonClicked = e => {
    controller.setAllSpeState(SpeState.Like);
    forceUpdate();
  }

  return (
    <>
      <div className="medicine-page">
        <h1 className="medicine-title">Spécialités médecine</h1>
        { model &&
          <div className="medicine-page-content">
            <div className="spe-labels-container">
              <YearSelect value={model.selectedMinYear.toString()} onChange={onStartYearChanged} />
              <YearSelect value={model.selectedMaxYear.toString()} onChange={onEndYearChanged} />
              { Object.entries(model.allSpeData)
                  .filter(pair => pair[1].state == SpeState.Like || pair[1].state == SpeState.Could)
                  .sort((a, b) => a[1].limitRankAnalysis.middleRankPct < b[1].limitRankAnalysis.middleRankPct)
                  .map(([key, value]) => (<SpeLabel speData={value} />
                ))
                || "loading..." }
            </div>
            <div className="spe-choice-box-container">
              <div className="spe-choice-shortcut-buttons">
                <button type="button" onClick={onResetAllButtonClicked}>Reset all</button>
                <button type="button" onClick={onChooseAllButtonClicked}>Choose all</button>
              </div>
              <div>
                { Object.entries(model.allSpeData).map(([key, value]) => (
                    <SpeChoiceBox speData={value} onChanged={onSpeChoiceBoxChanged}/>
                  ))
                }  
              </div>
            </div>
          </div>
          || "loading..."}
      </div>
    </>
  )
}
