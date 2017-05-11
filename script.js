function sortTable(n) {var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");  switching = true;
  while (switching) {switching = false;  rows = table.getElementsByTagName("TR");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch= true;        break;      }    }
    if (shouldSwitch) {rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;    }  }}

      function searchTable(){var input, filter, table, tr, td, i;
              input = document.getElementById("myInput"); filter = input.value.toUpperCase();
              table = document.getElementById("myTable"); tr = table.getElementsByTagName("tr");
              for (i = 0; i < tr.length; i++) {td = tr[i].getElementsByTagName("td"); tt = td[0];
                if (tt) {if ((td[0].innerHTML.toUpperCase().indexOf(filter) > -1)||(td[1].innerHTML.toUpperCase().indexOf(filter) > -1)||
                  (td[2].innerHTML.toUpperCase().indexOf(filter) > -1)||(td[3].innerHTML.toUpperCase().indexOf(filter) > -1)
                  ||(td[4].innerHTML.toUpperCase().indexOf(filter) > -1)||(td[5].innerHTML.toUpperCase().indexOf(filter) > -1)) {
                    tr[i].style.display = "";} else {tr[i].style.display = "none";}}}}
