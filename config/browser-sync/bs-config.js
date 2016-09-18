module.exports = {
    port: 8000,
    server: {
        middleware: {
            2: require('compression')()
        },
        baseDir: "./dist"
    }
};
