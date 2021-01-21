//-----------------------------------------------------------------//

function getFilename(){
    var thefile = document.getElementById('myFile');
	var f = thefile.value;
    return f.slice(12);
}

function addImage(){
	var newDiv = document.createElement("div");
	newDiv.className = "gallery";
	document.getElementById('main_g_container').appendChild(newDiv);
	
	var img = document.createElement('img');
	var fileName = getFilename();
	img.src = "img/"+fileName;
	img.className = "modal-content";
	img.addEventListener("click", function(){
		$("#myModal").css({"display": "block"});
		var modal = document.getElementById("img01");
		modal.src = this.src;
		});
	newDiv.appendChild(img);
	
}

function deleteImage(){
	var main_div = document.getElementById('main_g_container');
	var gallery_divs = document.getElementsByClassName("gallery");
	
	main_div.lastChild.remove(gallery_divs);
}

//-----------------------------------------------------------------//

$(document).ready(function(){
	$("#myModal").css({"display": "none"});
	$(".modal-content").click(function(){
		$("#myModal").css({"display": "block"});
		var modal = document.getElementById("img01");
		modal.src = this.src;
	});
	
	$("span").click(function(){
		$("#myModal").css({"display": "none"});
	});
});