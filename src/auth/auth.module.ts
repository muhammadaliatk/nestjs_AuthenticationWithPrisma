import { Module } from "@nestjs/common/decorators";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./jwt_strategy";

@Module({
    imports:[PassportModule],
    providers:[JwtStrategy],
    exports:[]
})
export class AuthModule{

}