// menu opens if a user clicks on menu sign in top right corner
document.getElementById('menu_collapsible').addEventListener('click', function() {
<<<<<<< HEAD
	document.getElementsByClassName('menu_content')[0].classList.toggle('visible');
});
// menu closes if a user clicks on any link
var links = document.querySelectorAll('.menu_content li a');
for(var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        document.getElementsByClassName('menu_content')[0].classList.remove('visible');
    })
}
document.getElementById('forward').addEventListener('click', function() {
	var introHeight = document.getElementById('intro').scrollHeight;
	window.scrollBy(0, introHeight);
});
=======
    if(document.getElementById('menu_content').style.top === "50px") {
        document.getElementById('menu_content').style.top = "-400px"; 
    }
    else {
        document.getElementById('menu_content').style.top = "50px";
    }
});
// menu closes if a user clicks on any link in phone version
var links = document.querySelectorAll('#menu_content li a');
for(var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        document.getElementById('menu_content').style.top = "-400px";
    })
}
>>>>>>> c52234e3df3db58b699dfe74ce00ef103105ed07


