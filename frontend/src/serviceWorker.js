const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = ['/', '/index.html', '/logo192.png', '/logo512.png'];

export const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then((registration) => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, (err) => {
          console.log('ServiceWorker registration failed: ', err);
        });
      });
    }
  };

  

window.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

window.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default installation prompt
  event.preventDefault();
  // Store the event for later use
  deferredPrompt = event;
  // Display a custom installation prompt if necessary
  showInstallPrompt();
});

function showInstallPrompt() {
    const promptMesz = document.getElementById('prompt-header');
    const installButton = document.getElementById('installButton');
    promptMesz.style.display = 'block';
  
    installButton.addEventListener('click', () => {
      // Show the installation prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the installation prompt');
        } else {
          console.log('User dismissed the installation prompt');
        }
        deferredPrompt = null;
        installButton.style.display = 'none';
      });
    });
  }