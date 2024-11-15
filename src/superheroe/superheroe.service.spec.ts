import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroeService } from './superheroe.service';

describe('SuperheroeService', () => {
  let service: SuperheroeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperheroeService],
    }).compile();

    service = module.get<SuperheroeService>(SuperheroeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
