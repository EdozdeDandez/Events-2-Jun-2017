'use strict';
function getImage(url){
    return new Promise(function(resolve, reject){
        var img = new Image()
        img.onload = function(){
            resolve(url)
        }
        img.onerror = function(){
            reject(url)
        }
        img.src = url
    })
}
getImage('media/image.jpg').then(function(successurl){
    document.getElementById('image').innerHTML = '<img src="' + successurl + '" />';
}).catch(function(errorurl){
    alert('Error loading ' + errorurl);
});
$("#submit").on('click', function (){
	var fname = document.getElementById('fname').value;
	var mname = document.getElementById('mname').value;
	var lname = document.getElementById('lname').value;
	alert('My name is ' + fname + ' ' + mname + ' ' + lname);
});
document.getElementById('comm').addEventListener("submit", function(e) {
	e.preventDefault();
	var msg = document.getElementById("comment").value.trim();
	if (msg) {
		alert(msg);
	}
}, false);