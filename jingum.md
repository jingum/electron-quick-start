1. how to package exe
 a. cnpm install electron -g
 b. cnpm install -g asar
 c. cnpm install -g electron-prebuilt
 d. setting package.joson:  "packageWin": "electron-packager . 'WeiXin' --platform=win32 --arch=x64 --icon=app.ico --out=./dist --asar --app-version=2.0.4 --ignore=\"(dist|src|docs|.gitignore|LICENSE|README.md|webpack.config.js|node_modules)\""
 e. npm run-script packageWin
note: need the latest node.js-- version v8.7.0
 reference from:
 http://www.cnblogs.com/chenjinxinlove/p/5881879.html

2. how to package to asar
 a. cnpm install -g asar
 b. asar pack your-app app.asar

 reference http://www.cnblogs.com/luobenCode/p/4510894.html

