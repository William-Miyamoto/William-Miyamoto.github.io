var coll = document.getElementsByClassName("proj-node");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling; // Get the .pnode-content inside the clicked proj-node

    if (content.classList.contains("visible")) {
      // Collapse the content
      content.classList.remove("visible");
    } else {
      // Expand the content
      content.classList.add("visible");
    }
  });
}
