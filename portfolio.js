const sideColumn = document.querySelector("#image");


sideColumn.addEventListener("mouseenter", function (e) {
    document.querySelector(".column-66").style.visibility = "visible";
  });

  sideColumn.addEventListener("mouseleave", function (e) {
    document.querySelector(".column-66").style.visibility = "hidden";
  });
  