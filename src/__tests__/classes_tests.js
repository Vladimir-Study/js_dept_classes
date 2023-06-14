import { Character } from '../main_index';
import { Bowman } from '../bowman';
import { Daemon } from '../daemon';
import { Magican } from '../magican';
import { Swordsman } from '../swordman';
import { Undead } from '../undead';
import { Zombie } from '../zombie';

test('new Character', () => {
  const ch = new Character('Ivan', 'Zombie');
  expect(ch).toEqual({
    name: 'Ivan',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 0,
    defence: 0,
  });
});

test('error name length < 2', () => {
  function testError() {
    const ch = new Character('I', 'Zombie');
    return ch;
  }
  expect(testError).toThrow(Error);
});

test('error name length > 10', () => {
  function testError() {
    const ch = new Character('IvanIvanovichIvanov', 'Zombie');
    return ch;
  }
  expect(testError).toThrow(Error);
});

test('error type', () => {
  function testError() {
    const ch = new Character('Ivan', 'Zomb');
    return ch;
  }
  expect(testError).toThrow(Error);
});

test('error hero dead one', () => {
  function testError() {
    const ch = new Character('Ivan', 'Zombie');
    ch.health = 0;
    ch.levelUp();
  }
  expect(testError).toThrow(Error);
});

test('error hero dead two', () => {
  function testError() {
    const ch = new Character('Ivan', 'Zombie');
    ch.health = 0;
    ch.damage(10);
  }
  expect(testError).toThrow(Error);
});

test('leveup', () => {
  const ch = new Bowman('Ivan', 'Bowman');
  ch.health = 10;
  ch.levelUp();
  expect(ch).toEqual({
    name: 'Ivan',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

test('damage', () => {
  const ch = new Bowman('Ivan', 'Bowman');
  ch.damage(10);
  expect(ch).toEqual({
    name: 'Ivan',
    type: 'Bowman',
    health: 92.5,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('new Bowman', () => {
  const ch = new Bowman('Ivan', 'Bowman');
  expect(ch).toEqual({
    name: 'Ivan',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
test('new Swordsman', () => {
  const ch = new Swordsman('Ivan', 'Swordsman');
  expect(ch).toEqual({
    name: 'Ivan',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
test('new Magican', () => {
  const ch = new Magican('Ivan', 'Magican');
  expect(ch).toEqual({
    name: 'Ivan',
    type: 'Magican',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
test('new Undead', () => {
  const ch = new Undead('Ivan', 'Undead');
  expect(ch).toEqual({
    name: 'Ivan',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
test('new Zombie', () => {
  const ch = new Zombie('Ivan', 'Zombie');
  expect(ch).toEqual({
    name: 'Ivan',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
test('new Daemon', () => {
  const ch = new Daemon('Ivan', 'Daemon');
  expect(ch).toEqual({
    name: 'Ivan',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
