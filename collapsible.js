var coll = document.getElementsByClassName("projectbutton");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    
    if (content.style.maxHeight) {
      // Collapse
      content.style.maxHeight = null; 
      content.style.padding = "0"; // Optional: Adjust padding when collapsed
    } else {
      // Expand
      content.style.maxHeight = (content.scrollHeight + 40) + "px"; // Dynamically set height
      content.style.padding = "20px"; // Optional: Add padding during expansion
    }
  });
}