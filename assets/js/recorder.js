// // sins
//
// var Browser = {
//   getUserMedia: function() {
//     return navigator.getUserMedia || navigator.webkitGetUserMedia ||
//               navigator.mozGetUserMedia || navigator.msGetUserMedia;
//   },
//
//   hasGetUserMedia: function() {
//     return !!(this.getUserMedia());
//   },
//
//   attachRequestButton: function($target) {
//     var button = $('button');
//
//     $target.append(button);
//   }
//
//   requestAduioAccess: function(cb) {
//     var errorCallback = function(error) {
//       console.log('Reeeejected!', error);
//     };
//
//     this.attachRequestButton($('body'));
//     this.getUserMedia()({ audio: true }, cb, errorCallback);
//   }
// }
//
// if (Browser.hasGetUserMedia()) {
//   Browser.requestAduioAccess(function(localMediaStream) {
//       var audio = document.querySelector('audio');
//       audio.src = window.URL.createObjectURL(localMediaStream);
//
//       // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
//       // See crbug.com/110938.
//       audio.onloadedmetadata = function(e) {
//         // Ready to go. Do some stuff.
//         console.log('woot');
//       };
//       console.log('woot');
//   });
//
//
// } else {
//   alert('getUserMedia() is not supported in your browser');
// }
