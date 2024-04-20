import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { MonorepoAppService } from './mono_taller.service';

@Controller()
export class MonoTallerController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly monoTallerService: MonorepoAppService) {}

  //@Get()
  //getHello(): string {
    //return this.monoTallerService.getHello();
  //}
  @EventPattern('new_mail')
  handleNewEmail(data:any){
    console.log('Creando nuevo evento',data )
  }
}
