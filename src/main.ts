import "./styles/style.scss";

enum Test {
  ONE = 'one',
  TWO = 'two',
}

class App {
  constructor() {}

  public start() {
    console.log('It works!', Test.ONE, Test.TWO);
  }
}

const app = new App();
app.start();
