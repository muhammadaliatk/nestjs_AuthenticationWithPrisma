import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards, 
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';
import { AuthGuard } from '@nestjs/passport';
import UserHelper from './users.helper'

@Controller('users')
export class UsersController  {
  constructor( 
    private usersService: UsersService,
    private jwtService:JwtService,  
    private userHelper:UserHelper) {}
  @Post()  
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createUserDto: CreateUserDto) {
    createUserDto.password=bcrypt.hashSync(createUserDto.password,Number(process.env.SALT));
    return await this.usersService.create(createUserDto);
  }
  @Get('getAll')
  async findAll() {    
    return this.usersService.findAll()
  }
  @Get('id/:id')
  async findOne(@Param('id') id: string) {
    return await this.usersService.findOne(+id);        
  }    
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(+id, updateUserDto);
  } 
  @Delete(':id')        
  async remove(@Param('id') id: string) {
    return await this.usersService.remove(+id); 
  }        
 @Post('login')  
 async login(
  @Body('email') email:string, 
  @Body('password') password:string
 ){ 
  const user = await this.usersService.login(email);  
  if(!user){ 
    return "User not exist";     
  }               
  const isMatch = await bcrypt.compare(password, user.password)
  if(isMatch){
    const jwt = await this.jwtService.signAsync({id:user.id,username:user.username});
    return jwt;       
  }
  else{
    return "Invaild Password";   
  }
 }
}
 