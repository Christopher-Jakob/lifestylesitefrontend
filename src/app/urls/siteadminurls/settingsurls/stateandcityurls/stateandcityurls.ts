import {settingsrooturl} from '../settingsurlsroot/settingsurlroot';


const stateandcityrooturl = settingsrooturl +  'stateandcity/';

// requries type either state or city relationpk pk of country or state and status all inactive or active
export const stateandcitybystatus = stateandcityrooturl + 'stateandcitybystatus/';
export const makestateorcity = stateandcityrooturl + 'makestateorcity/';
export const stateorcitydetail = stateandcityrooturl + 'stateorcitydetail/'; //type and pk come after

export const statetypenoparamsafer = stateandcityrooturl + 'state';
export const statetypeotherparamsafter = stateandcityrooturl + 'state/';

export const citytypenoparamsafter = stateandcityrooturl + 'city';
export const citytypeotherparamsafter = stateandcityrooturl + 'city/';

// requires country state or city for which type of one you need
export const getallcountriesstatesorcities = stateandcityrooturl +  'all/';

