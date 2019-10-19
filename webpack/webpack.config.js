module.exports = {

    //define entry point
    //this url file is were you require the orther javascript files
    entry: './src/script-1.js',

    //define output point
    //this file will be the one that bundle all thoses js file togather
    output: {
        path: 'dist', //where we want to put this file
        filename: 'bundle.js' //what is the name of this file
    },

     module: {
        rules: [
          // all loader we use is an object in this loader array
          // loader = something we use to change a language
            {

                test: /\.js$/, //this loader will affect only js files
                exclude: /(node_modules)/, //this loader will not run on files in node_modules
                //babel help transforming es2015 and jsx in vanilla js so that browser understand
                loader: 'babel-loader', //type of the loader
                query: {
                    presets: ['es2015'] //what is the initial language we want to transform
                }
            },
            {
                test: /\.scss$/, //require the css / scss file in the input js file we choosed for input (it's not css because in the end of the tuto he used sass extention)
                loader: 'style-loader!css-loader!sass-loader' // ! like an & that mean we want to use both at the same time

            }
        ] //rules
    }, //module

    devServer:{
      // to configure the dev-web-server we will use
      //for this to run :
      //npm install webpack-dev-server
      //webpack-dev-server
      contentBase: path.join(__dirname, 'src/'), // directori of the view we want to display
      compress: true,
      port: 3000 //the port we will use : 127.0.0.1:3000
  }

};
