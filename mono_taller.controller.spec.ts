import { Test, TestingModule } from '@nestjs/testing';
import { MonoTallerController } from './mono_taller.controller';
import { MonorepoAppService } from './mono_taller.service';

describe('MonoTallerController', () => {
  let monoTallerController: MonoTallerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MonoTallerController],
      providers: [MonorepoAppService],
    }).compile();

    monoTallerController = app.get<MonoTallerController>(MonoTallerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(monoTallerController.getHello()).toBe('Hello World!');
    });
  });
});
