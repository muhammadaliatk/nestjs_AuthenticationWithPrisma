import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArticalDto } from './dto/create-artical.dto';
import { UpdateArticalDto } from './dto/update-artical.dto';

@Injectable()
export class ArticalService {
  constructor(private prisma: PrismaService) {}
  create(createArticalDto: CreateArticalDto) {
    return this.prisma.artical.create({
      data: createArticalDto,
    });
  }

  findAll() {
    return this.prisma.artical.findMany();
  }

  findOne(id: number) {
    return this.prisma.artical.findUnique({ where: { id } });
  }

  update(id: number, updateArticalDto: UpdateArticalDto) {
    return this.prisma.artical.update({
      where: { id },
      data: updateArticalDto,
    });
  }

  remove(id: number) {
    return this.prisma.artical.delete({ where: { id } });
  }
}
