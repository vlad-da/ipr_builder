const gulp = require('gulp');
require('./gulp/dev.js');
require('./gulp/prod.js');

gulp.task('default', gulp.series(
    'clean-dist',
    'main-clean-dist',
    gulp.parallel('sass-dist', 'main-sass-dist', 'copy-img-dist', 'js-dist'), 
    gulp.parallel('watch')
    )
);

gulp.task('prod', gulp.series(
    'clean-dist',
    'main-clean-dist',
    gulp.parallel('sass-dist', 'main-sass-dist', 'copy-img-dist', 'js-dist'), 
    )
);