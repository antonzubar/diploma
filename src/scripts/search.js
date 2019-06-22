function mySearch() {

  // Declare variables for removing previous search results 
  var searchList = document.getElementById('searchResultList');
  var searchListItems = document.getElementsByClassName('search-item');

  // Removing previous search results
  while (searchList.firstChild) {
    searchList.removeChild(searchList.firstChild);
  }

  // Declare variables  
  var input, filter, ul, li, a, i, txtValue, node, node2, node3, textnode, descriptions, page, pages;
  var shortDescription = new Array();
  input = document.getElementById('destinationSearch');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByClassName('test');
  pages = document.getElementsByClassName('jumbotron');
  descriptions = document.getElementsByClassName('big-place__object-description');

  if (filter === "") {
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
    shortDescription[i] = descriptions[i].innerText;
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      //add search item for content
      node = document.createElement("LI");
      node.className = "search-item col-5";
      textnode = document.createTextNode(txtValue);
      node.appendChild(textnode);
      document.getElementById("searchResultList").appendChild(node);
      //add description to search item
      node2 = document.createElement("SPAN");
      node2.className = "short-description";
      textnode = document.createTextNode(shortDescription[i].substring(0,190)+"...");
      node2.appendChild(textnode);
      node.appendChild(node2);
      //add show more link
      node3 = document.createElement("A");
      node3.setAttribute("href","#page1");
      node3.className = "search-item__show-more";
      textnode = document.createTextNode("Show more");
      node3.appendChild(textnode);
      node.appendChild(node3);
      node3.onclick = function() {
          ul.style.display = "";
          console.log("big cards should be displayed");
          searchList.style.display = "none";
          if (filter!=="") {
            input.value="";
            page = Math.round(i/2);
            console.log(page);
          }
      };
    } else {
      li[i].style.display = "none";
    }
  }

  if (searchListItems.length === 0){
      node = document.createElement("LI");
      node.className = "no-results col-5";
      textnode = document.createTextNode("Sorry, there are no results :(");
      node.appendChild(textnode);
      document.getElementById("searchResultList").appendChild(node);
  }
}