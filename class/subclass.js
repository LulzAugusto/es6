class Developer extends Human {
  constructor(name, favoriteLanguage) {
    super(name);
    this.favoriteLanguage = favoriteLanguage;
  }

  describe() {
    return `${super.describe()} and its favorite language is ${this.favoriteLanguage}`;
  }
}

let d = new Developer('Luiz', 'JavaScript');
console.log(d.describe()); // Human name is Luiz and its favorite language is JavaScript
