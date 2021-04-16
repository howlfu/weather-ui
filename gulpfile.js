var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var fs = require('fs');
var path = require('path');
var webserver = require('gulp-webserver');

// Global string def
var PATH_DESC = './dist/';
var PATH_SRC_CSS = './css/';
var PATH_DESC_CSS = PATH_DESC + 'css/';
var PATH_DESC_IMG = PATH_DESC + 'images/';
var CSS_FILE_LIST = [
  'reset.css', 'style.css',
  'style-portrait.css', 'style-landscape.css', 'style-square.css',
  'style-pad-general.css', 'style-pad-landscape.css', 'style-pad-portrait.css',
  'style-phone-general.css', 'style-phone-landscape.css', 'style-phone-portrait.css', 'style-phone-square.css',
  'lang-en_us.css', 'lang-zh_tw.css', 'lang-zh_cn.css',
  'theme-honeywell.css'
];

// Global functions
function readUtf8File(filePath) {
  var fs = require('fs');
  return fs.readFileSync(filePath, 'utf8');
}

function writeUtf8File(buffer, filePath) {
  var fs = require('fs');
  fs.writeFileSync(filePath, buffer, 'utf8');
}

function ensurePath(folderPath) {
  var mkdirp = require('mkdirp');
  mkdirp.sync(folderPath);
}

function syncFolder(dstPath, srcPath) {
  var filelist = fs.readdirSync(srcPath);
  for (var idx in filelist) {
    if (!fs.lstatSync(path.join(srcPath, filelist[idx])).isDirectory()) {
      updateFile(filelist[idx], dstPath, srcPath);
    } else {
      folderName = filelist[idx];
      if (folderName != 'src') {
        syncFolder(path.join(dstPath, folderName),
          path.join(srcPath, folderName));
      }
    }
  }
}

function updateFile(filename, dstPath, srcPath) {
  var dstFilePath = path.join(dstPath, filename).replace(/\\/g, '/');
  var srcFilePath = path.join(srcPath, filename).replace(/\\/g, '/');
  console.log('Copy:' + srcFilePath + ' -> ' + dstFilePath);
  gulp.src(srcFilePath)
    .pipe(gulp.dest(dstPath));
}

// Gulp task
gulp.task('compile-css', function () {
  // Read and merge all css files
  var buffer = '';
  for (var idx in CSS_FILE_LIST) {
    if (CSS_FILE_LIST[idx].indexOf('lang-') != 0 &&
      CSS_FILE_LIST[idx].indexOf('theme-') != 0) {
      buffer += readUtf8File(PATH_SRC_CSS + CSS_FILE_LIST[idx]);
    }
  }
  ensurePath(PATH_DESC_CSS);
  var mergedCssPath = PATH_DESC_CSS + 'style.all.min.css';
  writeUtf8File(buffer, mergedCssPath);
  // Copy CSS file
  return gulp.src(mergedCssPath)
    .pipe(cssmin())
    .pipe(gulp.dest(PATH_DESC_CSS));
});

gulp.task('update-img', function (done) {
  var basePath = 'resource/pages/images/';
  syncFolder(PATH_DESC_IMG, basePath);
  done();
});

gulp.task('server', function() {
  gulp.src('./')
    .pipe(webserver({
      port:8088,
      directoryListing: false,
      open: true,
      fallback: 'start_template.html'
    }));
});

gulp.task('temp', function() {
  gulp.src('./')
    .pipe(webserver({
      port:8088,
      directoryListing: false,
      open: true,
      fallback: 'start_template.html'
    }));
});

gulp.task('default', function (done) {
  console.log('\nCompile');
  console.log('-----------------------');
  console.log('Update all resource        > gulp update-res');
  console.log('Update CSS & min           > gulp compile-css');
  console.log('Update imgs                > gulp update-img');
  console.log('\nRun server');
  console.log('-----------------------');
  console.log('Development HTTP Server    > gulp server');
  console.log('\nRun template');
  console.log('-----------------------');
  console.log('Development HTTP Server    > gulp temp');
  console.log('\n');
  done(); 
});
