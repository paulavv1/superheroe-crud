import { PartialType } from '@nestjs/swagger';
import { CreateSuperheroDto } from './create-superheroe.dto';

export class UpdateSuperheroDto extends PartialType(CreateSuperheroDto) {}