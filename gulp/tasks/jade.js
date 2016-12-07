'use strict';

module.exports = function() {
    $.gulp.task('jade', function() {
        return $.gulp.src('./source/template/pages/*.jade')
            .pipe($.gp.jade({ pretty: true }))
            .on('error', $.gp.notify.onError(function(error) {
                return {
                    title: 'jade',
                    message:  error.message
                }
            }))
            .pipe($.gulp.dest($.config.root));
    });
};
