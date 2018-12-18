import {settingsrooturl} from '../settingsurlsroot/settingsurlroot';


const stateandcityrooturl = settingsrooturl +  'stateandcity/';

// requries type either state or city relationpk pk of country or state and status all inactive or active
export const stateandcitybystatus = stateandcityrooturl + 'stateandcitybystatus/';
export const makestateorcity = stateandcityrooturl + 'makestateorcity/';
export const stateorcitydetail = stateandcityrooturl + 'stateorcitydetail/'; //type and pk come after

export const statetypenoparamsafer = 'state';
export const statetypeotherparamsafter = 'state/';

export const citytypenoparamsafter = 'city';
export const citytypeotherparamsafter = 'city/';
