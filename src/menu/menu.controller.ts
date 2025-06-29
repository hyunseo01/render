import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { Menu } from './menu.entity';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get('findall.do')
  findAll() {
    return this.menuService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.menuService.findById(id);
  }

  @Post('create')
  create(@Body() menu: Menu) {
    return this.menuService.create(menu);
  }

  @Put('update/:id')
  update(@Param('id') id: number, @Body() menu: Menu) {
    return this.menuService.update(id, menu);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: number) {
    return this.menuService.delete(id);
  }
}
