const _buildDir = 'dist';
const _srcDir = _buildDir + '/src';

const config = {
    buildTasksDev: [
        'clean',
        'rollup-dev'
    ],
    buildTasksDist: [
        'clean',
        'rollup-dist',
    ],
    clientEntryPoint: _srcDir + '/client/kite.client.window.js',
    dir: {
        build: _buildDir,
        src: _srcDir,
        test: _srcDir,
        coverageOutput: 'coverage',
        sourceMaps: 'sourcemaps',
    },
    filesToBuild: [
        '**/*.ts',
        '!node_modules/**',
        '!example/**',
        '!dist/**',
        '!build-scripts/**',
    ],
    filesToClean: [
        './dist/*',
        '!./dist/vendor.es2015.js',
        '!./dist/vendor.d.ts'
    ],
    filesToWatch: [
        './src/**/*.ts',
        './test/**/*.ts',
        './examples/browser-app/app.client.js',
        './examples/node-app/app.server.js',
    ],
    outputFileName: 'kite.js',
    rollup: {
        configDev: './rollup-config/kite.rollup.config.js',
        configDist: './rollup-config/kite.rollup.config.js',
        configVendor: './rollup-config/rollup.config.vendor.js',
    },
    tsConfig: 'tsconfig.json',
    webpackConfig: 'webpack.config.js',
};

module.exports = config;
