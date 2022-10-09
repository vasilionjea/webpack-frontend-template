enum Test {
  ONE = 'one',
  TWO = 'two',
}

class App {
  constructor() {}

  public start() {
    console.log('It works!', Test.ONE);
  }
}

const app = new App();
app.start();
