import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,"jwt"){
    constructor(){
        super({  
            jwtFromRequest: ExtractJwt.fromExtractors([
                ExtractJwt.fromHeader('authorization'),
                ExtractJwt.fromHeader('Authorization'),
              ]),
            ignoreExpiration:false,
            secretOrKey:process.env.SECRET 
        }
        )
    }
    validate(payload:any):any{ 
        try{
            console.log('payload is  ',payload);
            return payload;

        }catch(e){
            console.log(e)
            return e;
        }
        
    }
}