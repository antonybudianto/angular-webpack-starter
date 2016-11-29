/**
 * List all packages (modular or global) for DLL build
 * It's optional to list them all, but
 * it's recommended for big packages and speedy rebuilds
 */

// Angular
import '@angular/core';
import '@angular/common';
import '@angular/compiler';
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/forms';
import '@angular/http';
import '@angular/router';

// HMR
import '@angularclass/hmr';

// RxJS
// Uncomment below if you use RxJS in many non-preload lazy-loaded modules
// import 'rxjs';

// Global packages
import 'bootstrap/dist/js/bootstrap';
