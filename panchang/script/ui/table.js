export default function createTable(data) {
  console.log(data);

  var headers = ["DasaLord", "StartDate", "EndDate"];
  var table = document.createElement("table");
  var thead = table.createTHead();
  var headerRow = thead.insertRow(0);

  headers.forEach((value) => {
    var headerCell = document.createElement("th");
    headerCell.textContent = value;
    headerRow.appendChild(headerCell);
  });

  var tbody = table.createTBody();

  data.forEach((value, i) => {
    var row = tbody.insertRow(i);
    row.insertCell(0).textContent = value.DasaLord;
    row.insertCell(1).textContent = value.StartDate.toDate();
    row.insertCell(2).textContent = value.EndDate.toDate();
  });

  return table;
}
