const path = require('path');

module.exports = {
  entry: {
    "ephemeris-1.2.1": './src/Ephemeris.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    libraryTarget: 'umd',
    library: 'Ephemeris',
    globalObject: 'this',
  }
};
