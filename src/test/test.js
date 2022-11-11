import Character from '../character';
import Team from '../index';

test('addAll', () => {
  const pers1 = new Character('Bob', 'Bowman');
  const pers2 = new Character('Karen', 'Zombie');
  const team = new Team();
  team.addAll(pers1, pers2);
  expect(team.participant).toContain(pers1, pers2);
});

test('add', () => {
  const pers1 = new Character('Bob', 'Bowman');
  const pers2 = new Character('Karen', 'Zombie');
  const team = new Team();
  team.add(pers1);
  team.add(pers2);
  expect(team.participant).toContain(pers1, pers2);
});

test('array', () => {
  const pers1 = new Character('Bob', 'Bowman');
  const pers2 = new Character('Karen', 'Zombie');
  const team = new Team();
  team.addAll(pers1, pers2);
  expect(team.toArray()).toEqual([pers1, pers2]);
});

test('Symbol and iterators', () => {
  const pers1 = new Character('Caren', 'Zombie', 40, 20);
  const pers2 = new Character('Kitty', 'Bowman', 30, 10);
  const team = new Team();
  team.addAll(pers1, pers2);
  const iteration = team[Symbol.iterator]();
  expect(iteration.next().value).toEqual(pers1);
  expect(iteration.next().value).toEqual(pers2);
  expect(iteration.next().value).toEqual(undefined);
});
