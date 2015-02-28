class Human {
  constructor(name) {
    this.name = name;
  }

  describe() {
    return 'Human name is ' + this.name;
  }
}

let h = new Human('Luiz');
console.log(h.describe()); // Human name is Luiz
