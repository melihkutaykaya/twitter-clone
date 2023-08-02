const textArea = document.getElementById("postarea");

function auto_grow(element) {
    element.style.height = "5px";
    let scHeight = (element.scrollHeight) + "px"
    element.style.height = scHeight;
    textArea.style.height = scHeight;
  }