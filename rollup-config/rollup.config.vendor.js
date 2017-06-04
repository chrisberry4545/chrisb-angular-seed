import alias from 'rollup-plugin-alias';
import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
 entry: 'src/vendor.ts',
 dest: 'dist/vendor.es2015.js',
 format: 'iife',
 moduleName: 'vendor',
 plugins: [
   typescript(),
  //  alias({ rxjs: __dirname + '/node_modules/rxjs' }),
   resolve({ jsnext: true,
             main: true,
             browser: true }),
    commonjs({
      include: 'node_modules/**',
      sourceMap: false
    })
 ]
}