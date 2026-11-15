import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateVoitureDto, Voiture } from './voiture.dto';
import { VoitureService } from './voiture.service';

@Controller('voitures')
export class VoitureController {
  constructor(private readonly voitureService: VoitureService) {}

  @Post()
  create(@Body() voiture: CreateVoitureDto): Voiture {
    return this.voitureService.create(voiture);
  }

  @Get()
  findAll(): Voiture[] {
    return this.voitureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Voiture {
    return this.voitureService.findOne(id);
  }
}
