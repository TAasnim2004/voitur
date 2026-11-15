import { Module } from '@nestjs/common';
import { VoiturController } from './voitur.controller';
import { VoiturService } from './voitur.service';

@Module({
  controllers: [VoiturController],
  providers: [VoiturService]
})
export class VoiturModule {}
