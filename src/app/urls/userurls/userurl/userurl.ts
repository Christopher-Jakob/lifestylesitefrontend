import {rootuserurl} from '../userrooturl/userrooturl';


export const userurl = rootuserurl + 'user';

export const createswingerurl = userurl + '/swinger';

// must be a put request
export const swingerdeclineaccept = createswingerurl + '/swingerdeclineaccept';
