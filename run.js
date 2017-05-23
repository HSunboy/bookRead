const webpack = require('webpack');
const config = require('./webpack.config.js');
const chalk = require('chalk');
// const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const Webpackserver = require('webpack-dev-server')
const hsing = webpack(config);
const shell = require('shelljs')
const path = require('path')
shell.rm('-rf', path.join(__dirname, 'dist'))


const server = new Webpackserver(hsing, {
    stats: {
        colors: true,
        timings: true,
        version: true,
        chunks: false

    },
    headers: {
        deviceType: 'iphone'
    },
    https: false,
    compress: true,
    hot: false

});
server.listen(8080, "127.0.0.1", function() {
    console.log("Starting server on http://localhost:8080")
});

// hsing.apply(new ProgressPlugin(function(percentage, msg) {
//     console.log((percentage * 100) + '%', msg);
// }));

// hsing.run(function(err, stats) {
//     // console.log(stats.toJson());
//     const sjson = stats.toJson();
//     const chunk = [];
//     if (err) {
//         console.log(`错误信息：\n${err}\n     *****************************\n`)
//         process.exit(-1)
//     }
//     if (stats.hasErrors()) {
//         console.log(`错误信息：\n${sjson.errors}\n     *****************************\n`)
//         process.exit(-1)
//     }
//     if (stats.hasWarnings()) {
//         console.log(`错误信息：\n${sjson.warnings}\n     *****************************\n`)
//         process.exit(-1)
//     }
//     // console.log("构建信息:\n" + stats.toString({
//     //     colors: true
//     // }) + "\n ***********************")
//     console.log(`版本信息（webpack）：${sjson.version}`)
//     console.log(`用时（webpack）：${sjson.time}ms`)
//         // console.log(`${JSON.stringify(sjson.assetsByChunkName)}`)

//     for (let item in sjson.assetsByChunkName) {

//         chunk.push(sjson.assetsByChunkName[item]);
//     }
//     console.log(`${chalk.blue.bold.bgWhite("主文件：")}`)
//     for (let item in sjson.assets) {
//         if (chunk.indexOf(sjson.assets[item].name) != -1) {
//             console.log(`${chalk.blue("文件名：")}${sjson.assets[item].name} * 大小：${sjson.assets[item].size} B`);
//         }

//     }
//     console.log(`${chalk.blue.bold.bgWhite("其它文件：")}`)
//     for (let item in sjson.assets) {
//         if (chunk.indexOf(sjson.assets[item].name) != -1) {
//             continue;
//         }
//         console.log(`${chalk.blue("文件名：")}${sjson.assets[item].name} * 大小：${sjson.assets[item].size} B`);
//     }



// })