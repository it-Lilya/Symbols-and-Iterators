export default class Team {
  constructor() {
    this.participant = new Set();
  }

  add(personage) {
    this.participant.add(personage);
  }

  addAll(...personage) {
    personage.forEach((item) => this.participant.add(item));
  }

  toArray() {
    return [...this.participant];
  }

  [Symbol.iterator]() {
    const data = this.toArray();
    let result;
    let index = 0;
    return {
      next() {
        if (index < data.length) {
          result = {
            value: data[index],
            done: true,
          };
        } else {
          result = {
            value: undefined,
            done: false,
          };
        }
        index += 1;
        return result;
      },
    };
  }
}
