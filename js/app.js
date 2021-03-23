let list = document.getElementById('list');
let containerLength = document.getElementsByClassName('landing__container').length;

for (var i = 1; i <= containerLength; i++){
	
//Giving section its name, id and class to add it to the ul.
	let sec = "#section" + i + "-title";
	let secval = document.querySelector(sec);
	let sectext = secval.textContent;
	let newitem = document.createElement("li");
	let newtext = document.createTextNode(sectext);
	let secitem = "sample-nav" + i;
	newitem.setAttribute("id", secitem);
	newitem.setAttribute("class", "nav-list-item");
	newitem.appendChild(newtext);
	list.appendChild(newitem);

	//turning item to button to give an effect
	let sectarget = document.getElementById('section'+i);
	let listtarget = document.getElementById(secitem);

	//Give list item effect on click

	listtarget.addEventListener("click", function(){
		sectarget.scrollIntoView({
			behavior: "smooth"
		})
	});

}

