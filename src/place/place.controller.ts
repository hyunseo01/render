import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PlaceService } from './place.service';
import { Place } from './place.entity';

@Controller('place')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Get('findall.do')
  findAll() {
    return this.placeService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.placeService.findById(id);
  }

  @Post('create')
  create(@Body() place: Place) {
    return this.placeService.create(place);
  }

  @Put('update/:id')
  update(@Param('id') id: number, @Body() place: Place) {
    return this.placeService.update(id, place);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: number) {
    return this.placeService.delete(id);
  }
}
