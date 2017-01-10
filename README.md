atom中eslint配置方法：
1. 安装 linter-eslint package, 并开启 使用全局eslint配置
2. 全局安装eslint  npm install eslint -g
3. 全局安装airbnb推荐配置
   npm install eslint-plugin-jsx-a11y -g
   npm install eslint-plugin-react -g
   npm install eslint-plugin-import -g
   npm install eslint-config-airbnb -g
4. 在项目根目录配置.eslintrc文件
   配置示例如下：
   {
     "extends": "airbnb",
     "plugins": [
      "react"
     ],
     "env": {
       "browser": true
     },
     "rules": {
       //0 关闭  1 警告 2 错误
     }
   }
5. 添加.eslintignore文件
   在根目录下创建.eslintignore文件告诉eslint去忽略特定的文件和目录
