const {watch, series, parallel} = require("gulp");
const browserSync = require("browser-sync").create();

// Конфигурация
const path = require("./config/path.js");
const app = require("./config/app.js");


// Задачи
const html = require("./task/html.js");
const clear = require("./task/clear.js");
const scss = require("./task/scss.js");
const img = require("./task/img.js");


// Наблюдение
const watcher = () => {
  watch(path.html.watch, html).on("all", browserSync.reload);
  watch(path.scss.watch, scss).on("all", browserSync.reload);
  watch(path.img.watch, img).on("all", browserSync.reload);
}

// Сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root
    }
  })
}

const build = series(
  clear,
  parallel(html, scss, img)
);

const dev = series(
  build,
  parallel(watcher, server)
);


// Публичные задачи
module.exports.html = html;
exports.scss = scss;
exports.img = img;

// Сборка
exports.default = app.isProd ? build : dev;