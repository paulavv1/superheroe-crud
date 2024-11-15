import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroeController } from './superheroe.controller';
import { SuperheroeService } from './superheroe.service';

describe('SuperheroeController', () => {
  let controller: SuperheroeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroeController],
      providers: [SuperheroeService],
    }).compile();

    controller = module.get<SuperheroeController>(SuperheroeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
