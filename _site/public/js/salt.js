var posts = document.querySelectorAll(".post");
var sidebar = document.querySelectorAll(".sidebar-nav-item");


function updateNavSelection() {
  function isNotScrolledPast (el) {
    var rect = el.getBoundingClientRect();
    return ( rect.bottom >= 100 )
  }

  function removeActive(item, index, array){
    item.classList.remove('active');
  }

  for (var i=0; i < posts.length; i++){
    if (isNotScrolledPast(posts[i])){
      if (posts[i].classList.contains('active')) {
        break;
      }

      for (var j=0; j<sidebar.length; j++) {
        removeActive(sidebar[j]);
      }

      var postid = posts[i].dataset.postid;
      var navitem = document.querySelectorAll(".sidebar-nav-item[data-postid='" + postid + "']")[0];
      navitem.classList.add('active');
      break;
    }
  }
}

onscroll = updateNavSelection;
updateNavSelection();

var moretoggle = document.querySelectorAll(".moretoggle")[0];
var open = false;

function toggleNavItems() {
  if (!open) {
    for (var i=0; i<sidebar.length; i++) {
      sidebar[i].classList.add("open");
    }
    this.innerText = "Less";

  } else {
    for (var i=0; i<sidebar.length; i++) {
      sidebar[i].classList.remove("open");
    }
    this.innerText = "More";
  }
  open = !open;
}

moretoggle.onclick = toggleNavItems;
