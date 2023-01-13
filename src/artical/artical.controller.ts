import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ArticalService } from './artical.service';
import { CreateArticalDto } from './dto/create-artical.dto';
import { UpdateArticalDto } from './dto/update-artical.dto';

@Controller('artical')
export class ArticalController {
  constructor(private readonly articalService: ArticalService) {}

  @Post()
  async create(@Body() createArticalDto: CreateArticalDto) {
    return await this.articalService.create(createArticalDto);
  }

  @Get()
  async findAll() {
    return await this.articalService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.articalService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateArticalDto: UpdateArticalDto,
  ) {
    return await this.articalService.update(+id, updateArticalDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.articalService.remove(+id);
  }
}
