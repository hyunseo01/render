import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './menu.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepo: Repository<Menu>,
  ) {}

  findAll(): Promise<Menu[]> {
    return this.menuRepo.find();
  }

  findById(id: number): Promise<Menu | null> {
    return this.menuRepo.findOneBy({ menuno: id });
  }

  create(menu: Menu): Promise<Menu> {
    return this.menuRepo.save(menu);
  }

  async delete(id: number): Promise<void> {
    await this.menuRepo.delete(id);
  }

  async update(id: number, data: Menu): Promise<Menu | null> {
    const existing = await this.findById(id);
    if (!existing) return null;
    const updated = Object.assign(existing, data);
    return this.menuRepo.save(updated);
  }
}
