import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MonoTallerController} from './mono_taller.controller';
import { MonorepoAppService } from './mono_taller.service';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'TALLER_SERVICE', transport: Transport.TCP },
    ]),
  ],
  controllers: [MonoTallerController],
  providers: [MonorepoAppService],
})
export class MonoTallerModule {}
