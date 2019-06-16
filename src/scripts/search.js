function mySearch() {

  // Declare variables for removing previous search results 
  var searchList = document.getElementById('searchResultList');
  var searchListItems = document.getElementsByClassName('search-item');

  // Removing previous search results
  while (searchList.firstChild) {
    searchList.removeChild(searchList.firstChild);
  }

  // Declare variables  
  var input, filter, ul, li, a, i, txtValue, node, textnode;
  input = document.getElementById('destinationSearch');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByClassName('test');

  if (filter == "") {
    ul.style.display = "";
    console.log("big cards should be displayed");
    searchList.style.display = "none";
  } else {
    ul.style.display = "none";
    searchList.style.display = "";
    }

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName('span')[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      node = document.createElement("LI");
      node.className = "search-item col-5";
      textnode = document.createTextNode(txtValue);
      node.appendChild(textnode);
      document.getElementById("searchResultList").appendChild(node);
    } else {
      li[i].style.display = "none";
    }
  }

  if (searchListItems.length == 0){
      node = document.createElement("LI");
      node.className = "no-results col-5";
      textnode = document.createTextNode("Sorry, there are no results :(");
      node.appendChild(textnode);
      document.getElementById("searchResultList").appendChild(node);
  }
}