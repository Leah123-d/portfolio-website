function search_software() {
  let input = document.getElementById('searchbar').value.trim();
  let x = document.getElementsByClassName('software');
  let found = false;

  for (let i = 0; i < x.length; i++) {
    let itemText = x[i].textContent;

    if (itemText.toLowerCase().includes(input.toLowerCase())) {
      x[i].style.display = "list-item";

      // Scroll and highlight the first match
      if (!found) {
        x[i].scrollIntoView({ behavior: "smooth", block: "center" });
        x[i].style.backgroundColor = "yellow"; // Highlight the element
        found = true;

        // Remove highlight after 2 seconds
        setTimeout(() => {
          x[i].style.backgroundColor = "";
        }, 2000);
      }
    } else {
      x[i].style.display = "none";
    }
  }

  if (!found) {
    alert("No matches found.");
  }
}
