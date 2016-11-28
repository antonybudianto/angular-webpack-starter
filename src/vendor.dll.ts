/**
 * List all packages (modular or global) for DLL build
 * It's optional to list them all, but
 * it's recommended for big packages and speedy rebuilds
 */

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
import 'bootstrap/dist/js/bootstrap';

// Development only packages, for faster build with DLL
if (process.env.APP_ENV === 'development') {
    require('@angular/platform-browser-dynamic');
    require('@angularclass/hmr');
}
