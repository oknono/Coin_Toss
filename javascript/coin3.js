var foo = null; // object

function doColor(x)) {
    if (x == 0){
        foo.style.background = '#FF006E';
        x = 1;
    }
    else{
        foo.style.background = '#0FE8B5';
        x = 0;
  setTimeout(doColor(x),1000); // call doColor in 1000 msec
}


function init(){
    foo = document.getElementById('coin');
    doColor(0);
}

window.onload = init();
