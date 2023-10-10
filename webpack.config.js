const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    module: { 
        rules: [         
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }       
        ]
    },
    resolve: {
        alias: {
          'vue$': '../node_modules/vue/dist/vue.js'
        }
    },
    plugins: [
      // убедитесь что подключили плагин!
      new VueLoaderPlugin(),
    ]
}
