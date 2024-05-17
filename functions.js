function getDaysLived(date) {
  const today = new Date();
  const diff = today.getTime() - date.getTime();

  const days = Math.round(diff / (1000 * 3600 * 24)) - 1;

  const daysHeader = document.getElementById('days');
  daysHeader.innerHTML = `Días Vivido: ${days}`;
}

const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  const date = new Date(data.date);

  const nameHeader = document.getElementById('name');
  const legajoHeader = document.getElementById('legajo');
  const dateHeader = document.getElementById('dob');

  nameHeader.innerHTML = `Hello ${data.name}!`;
  legajoHeader.innerHTML = `Legajo: ${data.legajo}`;
  dateHeader.innerHTML = `Fecha de Nacimiento: ${data.date}`;

  getDaysLived(date);
  form.reset();
})