const mix = require('laravel-mix');

mix.js('resources/js/AudioParamMap.js', 'public/ja')
.sass('resources/sass/app.scss', 'public/css')
.version();