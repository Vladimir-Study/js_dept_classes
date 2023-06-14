import { Character } from './main_index';

export class Bowman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack || 25, defence || 25);
  }
}
