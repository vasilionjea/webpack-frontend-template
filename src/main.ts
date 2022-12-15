import './styles/style.scss';

enum Test {
  One = 'one',
  Two = 'two',
}

class App {
  public start() {
    console.log('It works!', Test.One, Test.Two);
  }
}

const app = new App();
app.start();
