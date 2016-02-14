var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');
var jshint = require('gulp-jshint');
var templateCache = require('gulp-angular-templatecache');

gulp.task('templates', function(){
	return gulp.src(['client/src/**/*.html'])
	.pipe(templateCache('templates.module.js', {
		module: 'letsrule.templates',
		standalone: true
	}))
	.pipe(gulp.dest('client/src/layout'));
});

gulp.task('js', function () {
	gulp.src([
		'client/src/**/*.module.js',
		'client/src/**/*.js'])
	// .pipe(sourcemaps.init())
		.pipe(concat('app.min.js'))
		.pipe(ngAnnotate())
		.pipe(uglify())
	// .pipe(sourcemaps.write('../maps'))
	.pipe(gulp.dest('client/dist'))
});

gulp.task('lint', function(){
	return gulp.src(['client/src/**/*.js'])
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('vendor', function(){
	return gulp.src([
    'client/vendor/node_modules/angular/angular.min.js',
    'client/vendor/node_modules/jquery/jquery.min.js',
    'client/vendor/node_modules/d3/d3.min.js',
		'client/vendor/node_modules/leaflet/dist/leaflet.js'
	.pipe(concat('vendor.min.js'))
	.pipe(gulp.dest('client/dist'));
});

gulp.task('vendor.css', function(){
	return gulp.src([
		'client/thirdparty/bootstrap.css',
		'client/thirdparty/*.css'
	])
	.pipe(concat('vendor.min.css'))
	.pipe(gulp.dest('./css'));
});

gulp.task('css', function(){
	return gulp.src([
		'client/src/layout/layout.css',
		'client/src/**/*.css'
	])
	.pipe(concat('app.min.css'))
	.pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
	gulp.watch('client/src/**/*.html',['templates'])
	gulp.watch('client/src/**/*.js', ['js'])
	gulp.watch('client/src/**/*.css', ['css'])
});
