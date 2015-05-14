var images = ['S_O.png'.src="img/S_O.png", 'S_P.png'.src="img/S_P.png", 'S_T.png'.src="img/S_T.png"],
i = 1;

// preload
for (var s=images.length; s--;) {
    var img = new Image();
    img.src = images[s];
}

// event handler
document.getElementById('seat0').addEventListener('click', function() {
this.src = images[i >= images.length - 1 ? i = 0 : ++i];
}, false);

// event handler 1
document.getElementById('seat1').addEventListener('click', function() {
this.src = images[i >= images.length - 1 ? i = 0 : ++i];
}, false);

// event handler 2
document.getElementById('seat2').addEventListener('click', function() {
this.src = images[i >= images.length - 1 ? i = 0 : ++i];
}, false);

// event handler 3
document.getElementById('seat3').addEventListener('click', function() {
this.src = images[i >= images.length - 1 ? i = 0 : ++i];
}, false);

// event handler 4
document.getElementById('seat4').addEventListener('click', function() {
this.src = images[i >= images.length - 1 ? i = 0 : ++i];
}, false);

// event handler 5
document.getElementById('seat5').addEventListener('click', function() {
this.src = images[i >= images.length - 1 ? i = 0 : ++i];
}, false);

// event handler 6
document.getElementById('seat6').addEventListener('click', function() {
this.src = images[i >= images.length - 1 ? i = 0 : ++i];
}, false);

// event handler 7
document.getElementById('seat7').addEventListener('click', function() {
this.src = images[i >= images.length - 1 ? i = 0 : ++i];
}, false);
