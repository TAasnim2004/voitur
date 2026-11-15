import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVoitureDto, Voiture } from './voiture.dto';

@Injectable()
export class VoitureService {
  private readonly voitures: Voiture[] = [];
  private nextId = 1;

  create(voiture: CreateVoitureDto): Voiture {
    const nouvelleVoiture: Voiture = {
      id: this.nextId++,
      ...voiture,
    };

    this.voitures.push(nouvelleVoiture);
    return nouvelleVoiture;
  }

  findAll(): Voiture[] {
    return this.voitures.map((voiture) => ({ ...voiture }));
  }

  findOne(id: number): Voiture {
    const voiture = this.voitures.find((item) => item.id === id);

    if (!voiture) {
      throw new NotFoundException(`Voiture avec l'identifiant ${id} introuvable`);
    }

    return { ...voiture };
  }
}
