const { spawn } = require('node:child_process');

module.exports = class CustomPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.watchRun.tap('Run Emulator again', () => {
      if ((process.env.NODE_en = 'development')) {
        const ls = spawn('firebase', ['emulators:start']);
        ls.stdout.on('data', (data) => {
          console.log(`stdout: ${data}`);
        });

        ls.on('close', (code) => {
          console.log(`child process exited with code ${code}`);
        });
      }
    });
  }
};
