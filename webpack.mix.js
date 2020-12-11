const mix = require('laravel-mix');

mix.js('resources/js/main.js', 'public/js/main.js').sass(
    'resources/sass/main.sass',
    'public/css/main.css'
);
