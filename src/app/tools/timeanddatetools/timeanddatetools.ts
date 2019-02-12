
import * as moment from 'moment';


export class TimeAndDateTools{

  constructor(){}

  yearssincedate(date){
    const value = moment(date).fromNow();
    return value;
  }
}
