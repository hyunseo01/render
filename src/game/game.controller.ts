import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GameService } from './game.service';
import { Game } from './game.entity';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get('findall.do')
  findAll() {
    return this.gameService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.gameService.findById(id);
  }

  @Post('create')
  create(@Body() game: Game) {
    return this.gameService.create(game);
  }

  @Put('update/:id')
  update(@Param('id') id: number, @Body() game: Game) {
    return this.gameService.update(id, game);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: number) {
    return this.gameService.delete(id);
  }
}
