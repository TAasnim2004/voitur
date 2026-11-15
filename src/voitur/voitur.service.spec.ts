import { Test, TestingModule } from '@nestjs/testing';
import { VoiturService } from './voitur.service';

describe('VoiturService', () => {
  let service: VoiturService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VoiturService],
    }).compile();

    service = module.get<VoiturService>(VoiturService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
