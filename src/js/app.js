"use strict";

import Route from './route.js';
import Router from './router.js';

//export default
    (function () {
    function init() {
        const router = new Router([
            new Route('home', 'home.html', true),            
            new Route('library', 'my-library.html')
        ]);
    }
    init();
}());