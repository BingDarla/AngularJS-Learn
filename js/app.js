window.addEventListener('hashchange', function() {
    console.log('Hash changed!:' + window.location.hash);
    if (window.location.hash === "#/bookmark/3") {
        console.log('let me go to Page 2');
    }
})