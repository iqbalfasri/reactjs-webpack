# reactjs-webpack
--

# Instalasi

Step 1
masuk ke dir/
~$ npm init

Step 2
jika sudah , lakukan perintah dibawa ini untuk meng-install webpack
~$ npm install webpack webpack-dev-server --save-dev

Step 3
install reactjs-nya
~$ npm install react react-dom --save

Step 4
install babel
~$ npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev

Step 5
lalu buat file dengan nama => webpack.config.js
isinya =>

  ```var path = require('path');
  module.exports = {
    entry : './script.js / .jsx',  =>  file reactJS
    output : {
      path : path.resolve(__dirname, ''), => file html
      filename : 'transpiled.js / bundle.js' => file output dari file reacJS yang nati akan di gunakan
    },
    module : {
      loaders : [
        {
          test : /\.js?$/,
          loader : 'babel-loader',
          exclude : /node_modules/,
          query : {
            presets : ['es2015', 'react']
          }
        }
      ]
    }
  }
```

-- Step 6
buka file package.json , lalu tambahkan code ini di dalam object script

"it" : "webpack-dev-server --hot" => enable hot reload // reload otomatis
