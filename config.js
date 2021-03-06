module.exports = {
    config: {
		tailwindjs: "./tailwind.config.js",
	},
    paths: {
		root: "./",
		src: {
			base: "./src",
			css: "./src/css",
            stylus: './src/stylus/*.styl',
			js: "./src/js",
			img: "./src/img"
		},
		dist: {
			base: "./dist",
			css: "./dist/css",
			js: "./dist/js",
			img: "./dist/img"
		},
		build: {
			base: "./build",
			css: "./build/css",
			js: "./build/js",
			img: "./build/img"
		}
	}
}