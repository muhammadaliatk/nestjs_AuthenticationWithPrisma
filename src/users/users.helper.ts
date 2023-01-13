
import { Injectable } from '@nestjs/common';
@Injectable()
export default class UserHelper {
  sum(num1: number, num2: number) {
    return num1 + num2;
  }
  multiply(num1:number,num2:number){
    return num1*num2;
  }
  restFun(...value){
    return value;
  }
}
