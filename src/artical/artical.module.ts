import { Module } from '@nestjs/common';
import { ArticalService } from './artical.service';
import { ArticalController } from './artical.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ArticalController],
  providers: [ArticalService],
  imports: [PrismaModule],
})
export class ArticalModule {}
