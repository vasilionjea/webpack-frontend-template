enum Test {
  One = 'one',
  Two = 'two',
}

export default class App {
  public start() {
    console.log('It works!', Test.One, Test.Two);
  }
}
