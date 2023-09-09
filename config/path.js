const pathSrc = "./src";
const pathDest = "./public";

module.exports = {
    root: pathDest,

    html: {
        src: pathSrc + "/html/*.html",
        watch: pathSrc + "/html/**/*.html",
        dest: pathDest
    },

    scss: {
        src: pathSrc + "/sass/*.{scss,sass}",
        watch: pathSrc + "/sass/**/*.{scss,sass}",
        dest: pathDest + "/css"
    },

    img: {
        src: pathSrc + "/img/*.{jpg,jpeg,png,gif,svg}",
        watch: pathSrc + "/img/**/*.{jpg,jpeg,png,gif,svg}",
        dest: pathDest + "/img"
    },
}