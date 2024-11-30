var coll = document.getElementsByClassName("projectbutton");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    var pElement = content.querySelector("p");
    if (content.style.maxHeight) {
      // Collapse
      content.style.maxHeight = null; 
      content.classList.remove("visible");
      content.style.padding = "0px";
    } else {
      // Expand
      content.style.maxHeight = (pElement.scrollHeight * 4) + "px"; // Dynamically set height
      content.classList.add("visible");
      content.style.padding = "30px";
    }
  });
}