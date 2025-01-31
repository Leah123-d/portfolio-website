let searchTimeout;

function search_software() {
  clearTimeout(searchTimeout); // Clear previous timeouts to debounce
  searchTimeout = setTimeout(() => {
    performSearch();
  }, 300); // Wait 300ms after typing stops
}

function performSearch() {
  let input = document.getElementById('searchbar').value.trim();
  let x = document.getElementsByClassName('software');
  let found = false;

  for (let i = 0; i < x.length; i++) {
    let itemText = x[i].textContent;

    if (itemText.toLowerCase().includes(input.toLowerCase())) {
      x[i].style.display = "list-item";

      if (!found) {
        x[i].scrollIntoView({ behavior: "smooth", block: "center" });
        x[i].style.backgroundColor = "yellow";
        found = true;

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
