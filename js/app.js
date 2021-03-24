let list = document.getElementById('list');
let containerLength = document.getElementsByClassName('landing__container').length;



for (var i = 1; i <= containerLength; i++){
	
//Giving section its name, id and class to add it to the ul.
	let sec = "#section" + i + "-title";
	let secval = document.querySelector(sec);
	let sectext = secval.textContent;
	let newitem = document.createElement("li");
	let newtext = document.createTextNode(sectext);
	let secitem = "section" + i + "x";
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
			behavior: "smooth" //smooth scroll property to give scroll effect to user
		})
	});

}
//getting section in view
function InView() {
  let isInViewport = function(x) {
    let bound = x.getBoundingClientRect();
    return (
      bound.top <= 50 && bound.top >= -500 &&
      bound.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bound.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  for (i = 1; i < containerLength + 1; i++) {
    let sectionInView = document.getElementById("section"+i);
    let sectab = document.getElementById("section"+i+"x");

    window.addEventListener(
      "scroll",
      //giving active section active class and it corresponding item in nav list
      function(event) {
        if (isInViewport(sectionInView)) {
          	sectionInView.classList.add("your-active-class");
			sectab.classList.add('activeclass');
        } else {
         	sectionInView.classList.remove("your-active-class");
			sectab.classList.remove('activeclass');
        }
      },
      false
    );
  }
}
InView();

