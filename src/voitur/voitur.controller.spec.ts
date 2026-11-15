import { Test, TestingModule } from '@nestjs/testing';
import { VoiturController } from './voitur.controller';

describe('VoiturController', () => {
  let controller: VoiturController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoiturController],
    }).compile();

    controller = module.get<VoiturController>(VoiturController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
