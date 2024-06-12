let aar = [];

function userData(name, password, date, text, num, Disease) {
  this.tName = name;
  this.Passwar = password;
  this.Dateofbirt = date;
  this.gende = text;
  this.phonenumbe = num;
  this.Chronicdisease = Disease;
}

function render(event) {
  event.preventDefault();
  let form = document.getElementById("form");
  form = event.target;
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  let date = document.getElementById("date").value;
  let text = document.getElementById("text").value;
  let num = document.getElementById("num").value;
  let Disease = form.Disease.value;

  let mypat = JSON.stringify(aar);

  let p1 = new userData(name, password, date, text, num, Disease);
  aar.push(p1);

  localStorage.setItem("pationt", mypat);

  let div33 = document.getElementById("UserCard");
  let test = document.createElement("div");
  test.setAttribute("class", "cardBody");
  div33.appendChild(test);
  let get = localStorage.getItem("pationt");
  let transform = JSON.parse(get);
  
}
form.addEventListener("submit", render);
