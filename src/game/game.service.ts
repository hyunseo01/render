import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './game.entity';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private readonly gameRepo: Repository<Game>,
  ) {}

  findAll(): Promise<Game[]> {
    return this.gameRepo.find();
  }

  findById(id: number): Promise<Game | null> {
    return this.gameRepo.findOneBy({ gameno: id });
  }

  create(game: Game): Promise<Game> {
    return this.gameRepo.save(game);
  }

  async delete(id: number): Promise<void> {
    await this.gameRepo.delete(id);
  }

  async update(id: number, data: Game): Promise<Game | null> {
    const existing = await this.findById(id);
    if (!existing) return null;
    const updated = Object.assign(existing, data);
    return this.gameRepo.save(updated);
  }
}
