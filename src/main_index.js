export class Character {
  #typesUser = [
    'Bowman',
    'Swordsman',
    'Magican',
    'Daemon',
    'Undead',
    'Zombie',
  ];

  constructor(name, type, health, level, attack, defence) {
    if (name.length < 10 && name.length > 2) {
      this.name = name;
    } else {
      throw new Error('Lenght name must be > 2 and < 10');
    }
    if (this.#typesUser.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Type must be one of: Bowman, Swordsman, Magican, Daemon, \
            Undead, Zombie');
    }
    this.health = health || 100;
    this.level = level || 1;
    this.attack = attack || 0;
    this.defence = defence || 0;
  }

  levelUp() {
    if (this.health == 0) {
      throw new Error('Your hero is dead!');
    }
    this.level++;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health == 0) {
      throw new Error('Your hero is dead!');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}

export class Bowman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack || 25, defence || 25);
  }
}

export class Swordsman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack || 40, defence || 10);
  }
}

export class Magican extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack || 10, defence || 40);
  }
}
export class Undead extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack || 25, defence || 25);
  }
}
export class Zombie extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack || 40, defence || 10);
  }
}
export class Daemon extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack || 10, defence || 40);
  }
}
const ch = new Bowman('Ivan', 'Bowman');
ch.damage(10);
console.log(ch);
