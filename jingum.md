1. how to package exe
 a. cnpm install electron -g
 b. cnpm install -g asar
 c. cnpm install -g electron-prebuilt
 d. setting package.joson:  "packageWin": "electron-packager . 'WeiXin' --platform=win32 --arch=x64 --icon=app.ico --out=./dist --asar --app-version=2.0.4 --ignore=\"(dist|src|docs|.gitignore|LICENSE|README.md|webpack.config.js|node_modules)\""
 e. npm run-script packageWin

 reference from:
 http://www.cnblogs.com/chenjinxinlove/p/5881879.html

