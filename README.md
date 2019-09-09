# Webpack Learning

<p style="text-align: right; margin-right: 20px"><strong> Trung Ng </strong></p>

============================

### 1. Zero configuration

- Create js project using **npm init**
- Install webpack: `npm install webpack --save-dev`
- After run it, now, node_modules contain webpack library. We can use webpack command in \_node_modules/.bin/webpack\* to build js file: `node_modules/.bin/webpack src/main.js dist/bundle.js`
- For the convenience, we should create npm script in **package.json** to run webpack:
  ```js
        "scripts": {
                "build": "webpack src/main.js dist/bunlde.js --watch"
        },
  ```

### 2. Create configuration file

It good to use single webpack command line to build single simple js file without including bunch of configurations or plugins. Otherwise, when your project goes larger, need more configurations for compilation, it really hard and inconvenience to use the way before. The good way is using webpack config file instead.

- Create webpack config file: `touch webpack.config.js` , any webpack configurations go inside this file.

```es6
const webpack = require("webpack"); // Include webpack module
const path = require("path"); // Include path module for file/foler path resolving
module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js" // - name here get exactly entry file name ===  main
  }
};
```

- Edit npm scripts to:

  ```js
  "scripts": {
        "build": "webpack --watch"
  },
  ```

  Remove the specific file name entry and output, we need to run webpack command only. It is smart enough to run file webpack.config.js automatically.

  - After run `npm run build`, we get exact same thing as before.

### 3. Css loader

        [] //-TODO

### 4. ES2015 compilation with babel

        [] //-TODO

### 5. Uglifyjs for difference environment

        [] //-TODO

### 6. Sass complication

        [] //-TODO

### 7. Extract CSS file from Js build with ExtractTextPlugin

        [] //-TODO

### 8. File-loader, url-loader, image optimization

        [] //-TODO

### 9. Strip unused css with PurifyCSSPlugin

        [] //-TODO

### 10. Minimize Loader

        [] //-TODO

---

<p style="text-align: center">06/09/2019</p>
````
