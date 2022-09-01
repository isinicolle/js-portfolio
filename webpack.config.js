const path = require('path');

module.exports = {
    entry: './src/index.js', //cual es el punto de entrada de la aplicacion
    output: { //donde lo va enviar webpack
        path: path.resolve(__dirname, 'dist'), //donde lo va a generar dist es un estandar
        filename: 'main.js' //nombre del archivo que se va a generar
    },

    //extensiones a trabajar
    resolve: {
        extensions: ['.js', '.jsx'] //extensiones a trabajar
    },
    module:{ 
        rules: [   //modulo que se va a trabajar
        {
            test: /\.m?js$/, //extensiones a trabajar
            exclude: /node_modules/, //excluir las carpetas de node_modules
            use: {
                loader: 'babel-loader'
            }
          }
        ]
      },
      plugins: [ //plugins que se van a usar
        new HtmlWebpackPlugin({
            inject: true, //insercion de los elementos
            template: './public/index.html', //plantilla que se va a usar
            filename: 'index.html' //nombre del archivo que se va a generar , es el resultado de la preparacion de html
        })
        ]
    }