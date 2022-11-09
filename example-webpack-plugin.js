export default class ExampleWebpackPlugin {
  // Define `apply` as its prototype method which is supplied with compiler as its argument
  apply(compiler) {
    // Specify the event hook to attach to
    compiler.hooks.emit.tapAsync('ExampleWebpackPlugin', (compilation, callback) => {
      console.log('The `compilation` object which represents a single build of assets:', compilation);

      // Manipulate the build using the plugin API provided by webpack
      // compilation.addModule(/* ... */);

      callback();
    });
  }
}
