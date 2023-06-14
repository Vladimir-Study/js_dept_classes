import { Character } from './main_index';

export class Swordsman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack || 40, defence || 10);
  }
}
