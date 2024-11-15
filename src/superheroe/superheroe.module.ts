import { Module } from '@nestjs/common';
import { SuperheroeService } from './superheroe.service';
import { SuperheroeController } from './superheroe.controller';


@Module({
  controllers: [SuperheroeController],
  providers: [SuperheroeService],
})
export class SuperheroesModule {}
