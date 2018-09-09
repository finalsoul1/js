const gulp = require('gulp');
// require : node가 제공하는 함수
// require('gulp-babel')
// 'gulp-babel' 이라는 문자열로 노드가 서비스를 제공하거나 
// node_modules 폴더 밑에 해당 프로그램이 존재해야 한다. (노드는 지원하지 않음)
// npm i gulp-babel --save-dev
const babel = require('gulp-babel');

gulp.task('default', function() {
  
  gulp.src('es6/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
  
  gulp.src('public/es6/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('public/dist'));
});