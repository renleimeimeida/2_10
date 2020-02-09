const { override, fixBabelImports, addLessLoader } = require('customize-cra');
 module.exports = override(
      fixBabelImports('import', {
       libraryName: 'antd',
       libraryDirectory: 'es',
       style: true,
     }),
      addLessLoader({
         javascriptEnabled: true,
         modifyVars: { '@primary-color': 'orange' },//在这里修改主题颜色
       })
   );