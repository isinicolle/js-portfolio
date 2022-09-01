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
    }
}