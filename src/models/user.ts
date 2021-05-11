import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, Allow } from 'class-validator';
export abstract class CreateRecipe {
    @IsDefined()
    @ApiProperty()
    public name: string;

    @Allow()
    public description?: string = '';
}
