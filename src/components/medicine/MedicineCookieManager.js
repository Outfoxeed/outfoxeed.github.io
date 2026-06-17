import { MINIMAL_YEAR, MAXIMAL_YEAR } from "./MedicineConsts";

function setCookie(cname, cvalue, exdays = 365) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const SPE_STATES_COOKIE_NAME = "SpeStates";
const SELECTED_YEARS_COOKIE_NAME = "SelectedYears";

export class MedicineCookieManager {
    constructor() {
        this.speStates = getCookie(SPE_STATES_COOKIE_NAME);
        if(this.speStates == "") {
          for (let i = 0; i < 48; i++) {
            this.speStates += "0";
          }
        }
        
        this.selectedYears = getCookie(SELECTED_YEARS_COOKIE_NAME);
        if(this.selectedYears == "" || this.selectedYears == "NaNNaN") this.setSelectedYears([MAXIMAL_YEAR, MAXIMAL_YEAR]);
        
        console.log("Cookies: {SpeStates: " + this.speStates + ", SelectedYears: " + this.selectedYears + "}");
    }

    getSpeState(speId) { return parseInt(this.speStates[speId]); }
    setSpeState(speId, speState) { 
        this.speStates = this.speStates.substring(0, speId) + speState.toString()[0] + this.speStates.substring(speId + 1);
        setCookie(SPE_STATES_COOKIE_NAME, this.speStates); 
    }
    
    getSelectedYears() {
        let result = [MINIMAL_YEAR, MAXIMAL_YEAR];
        result[0] = parseInt(this.selectedYears.substring(0, 4));
        result[1] = parseInt(this.selectedYears.substring(4));
        return result;
    }
    setSelectedYears(years) {
        this.selectedYears = years[0].toString() + years[1].toString();
        setCookie(SELECTED_YEARS_COOKIE_NAME, this.selectedYears); 
    }
}