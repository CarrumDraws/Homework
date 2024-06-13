let form = document.getElementsByTagName("form")[0];
let h3 = document.getElementsByTagName("h3")[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(form);
  for (let [name, val] of data) {
    console.log(name + " " + val);
    fetch("http://localhost:3000", {
      method: "POST",
      body: JSON.stringify(val),
    });
  }
});
