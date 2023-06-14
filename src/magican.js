import { Character } from './main_index';

export class Magican extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack || 10, defence || 40);
  }
}
