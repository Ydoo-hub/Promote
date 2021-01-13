// 入口起点文件
/*
    1. 运行指令
        开发环境的指令： webpack ./src/index.js -o ./build/built.js --mode=development
        webpack会以 ./src/index.js 为入口文件，打包后输出到 ./build/built.js
        整体打包环境，是开发环境
*/
function add (x, y) {
    console.log(x + y);
}