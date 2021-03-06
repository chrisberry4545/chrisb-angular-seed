import alias from 'rollup-plugin-alias';
import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';;
import angular from 'rollup-plugin-angular';
import pug from 'rollup-plugin-pug';

export default {
 entry: 'src/app/chris/chris.main.browser.ts',
 dest: 'dist/chris/main.js',
 format: 'iife',
 moduleName: 'vendor',
 plugins: [
   angular(),
   pug(),
   typescript(),
   alias({ rxjs: __dirname + '/node_modules/rxjs' }),
   resolve({ jsnext: true,
             main: true,
             browser: true }),
    commonjs({
      include: 'node_modules/**',
      sourceMap: false
    })
 ],
  external: [
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/core',
  '@angular/http',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  '@angular/router',
  '@angular/router-deprecated'
  ],
  globals: {
    '@angular/common' : 'vendor._angular_common',
    '@angular/compiler' : 'vendor._angular_compiler',
    '@angular/core' : 'vendor._angular_core',
    '@angular/http' : 'vendor._angular_http',
    '@angular/platform-browser' : 'vendor._angular_platformBrowser',
    '@angular/platform-browser-dynamic' : 'vendor._angular_platformBrowserDynamic',
    '@angular/router' : 'vendor._angular_router',
    '@angular/forms' : 'vendor._angular_forms'
  }
}