import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt/dist';
import UserHelper from './users.helper';

@Module({ 
  controllers: [UsersController],
  providers: [UsersService,UserHelper],
  exports:[UsersService],
  imports: [PrismaModule,
            JwtModule.register({
              secret:process.env.SECRET,
              signOptions:{expiresIn:'1d'}
            }),
  ],
})
export class UsersModule {}
