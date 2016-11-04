// Angular
import '@angular/platform-browser';
import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/router';

// RxJS
// Uncomment below if you use RxJS in many non-preload lazy-loaded modules
// import 'rxjs';

// Global packages
import 'jquery';
import 'bootstrap/dist/js/bootstrap';

// Development only packages, for faster build with DLL
if (process.env.APP_ENV === 'development') {
    require('@angular/platform-browser-dynamic');
    require('@angularclass/hmr');
}
