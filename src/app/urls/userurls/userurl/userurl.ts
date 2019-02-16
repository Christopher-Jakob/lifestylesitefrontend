import {rootuserurl} from '../userrooturl/userrooturl';


export const userurl = rootuserurl + 'user';

export const createswingerurl = userurl + '/swinger';

// must be a put request
export const swingerdeclineaccept = createswingerurl + '/swingerdeclineaccept';

// gets a lifestyleuser object and logs it in
export const userlogin = userurl + '/login';

// gets a swinger object from lifestyleuser pk and logs it in
// requires lifestyle user object pk as argument
export const swingerlogin = userurl + '/swinger/login/';
