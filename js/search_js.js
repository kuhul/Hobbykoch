
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("showb");
}

function filterFunction() {
    var input, filter, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } 

      else {
        a[i].style.display = "none";
      }
    }

    document.getElementById("btn_sea").classList.toggle("search_btn");
  } 