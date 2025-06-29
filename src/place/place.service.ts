import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Place } from './place.entity';

@Injectable()
export class PlaceService {
  constructor(
    @InjectRepository(Place)
    private readonly placeRepo: Repository<Place>,
  ) {}

  findAll(): Promise<Place[]> {
    return this.placeRepo.find();
  }

  findById(id: number): Promise<Place | null> {
    return this.placeRepo.findOneBy({ placeno: id });
  }

  create(place: Place): Promise<Place> {
    return this.placeRepo.save(place);
  }

  async delete(id: number): Promise<void> {
    await this.placeRepo.delete(id);
  }

  async update(id: number, data: Place): Promise<Place | null> {
    const existing = await this.findById(id);
    if (!existing) return null;
    const updated = Object.assign(existing, data);
    return this.placeRepo.save(updated);
  }
}
