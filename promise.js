/*
Make a Promise, using One button in promise.html then log status there in another element.
You need to show all states of promise, for example on first time click on
that button:
1) Started (Sync code started)
1) Promise started (Async code started)
1) Promise made (Sync code terminated)
1) Promise fulfilled (Async code terminated) and so on
So create one js file write your promise code into promise.js and show output in html.
*/

var promiseCount = 0;

function testPromise() {
    var thisPromiseCount = ++promiseCount;

    var log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Started (<small>Sync code started</small>)<br/>');

    // Make a new promise: we promise a numeric count of this promise,
    //starting from 1 (after waiting 3s)
    var p1 = new Promise(
        // The resolver function is called with the ability to resolve or
        // reject the promise
        function(resolve, reject) {
            log.insertAdjacentHTML('beforeend', thisPromiseCount +
                ') Promise started (<small>Async code started</small>)<br/>');
            // This is only an example to create asynchronism
            window.setTimeout(
                function() {
                    // We fulfill the promise !
                    resolve(thisPromiseCount);
                }, Math.random() * 3000);
        }
    );

    // the promise is resolved/fulfilled with the then() call
    p1.then(
        // Log the fulfillment value
        function(val) {
            log.insertAdjacentHTML('beforeend', val +
                ') Promise fulfilled (<small>Async code terminated</small>)<br/>');
        }
    )
    .catch(
      function(reason) {
          console.log('Handle rejected promise ('+reason+') here.');
      }    
    );

    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Promise made (<small>Sync code terminated</small>)<br/>');
}
