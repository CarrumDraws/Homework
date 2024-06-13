let tbody = document.getElementsByTagName("tbody")[0];
let select = document.getElementsByTagName("select")[0];

// "change" event (wtf??)
select.addEventListener("change", () => {
  getData(select.value);
});

async function getData(order) {
  try {
    let response = await fetch(
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
    );
    if (!response.ok) throw new Error("Issue with Fetch");
    let data = await response.json();
    addRows(data.data, order);
  } catch (err) {
    console.log(err);
  }
}

getData();

function addRows(data, order) {
  tbody.innerHTML = null;
  let totalPop = 0;
  if (order === "asc")
    data.sort((a, b) => {
      return a.Population - b.Population;
    });
  for (let i = 0; i <= data.length; i++) {
    let tr = document.createElement("tr");
    let year = document.createElement("td");
    let pop = document.createElement("td");
    year.innerHTML = i == data.length ? "Average" : data[i].Year;
    pop.innerHTML =
      i == data.length ? Math.floor(totalPop / i) : data[i].Population;
    totalPop += i == data.length ? 0 : data[i].Population;
    tr.append(year);
    tr.append(pop);
    tbody.append(tr);
  }
}
