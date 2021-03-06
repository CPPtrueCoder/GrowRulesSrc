module.exports=function () {
	
	$.gulp.task ('scripts:lib', function () {
		return $.gulp.src (['node_modules/jquery/dist/jquery.slim.js',
			'node_modules/slick-carousel/slick/slick.min.js'])
			.pipe($.gp.concat('libs.min.js'))
			.pipe($.gulp.dest('build/js/'))
			.pipe ($.browserSync.reload ({
				stream: true
			}));
	});
	$.gulp.task ('scripts', function () {
		return $.gulp.src (['src/js/index.js'])
			
			.pipe($.gulp.dest('build/js/'))
			.pipe ($.browserSync.reload ({
				stream: true
			}));
	});
};