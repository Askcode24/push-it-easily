const year = document.getElementById("year");
const fullDate = new Date().getFullYear();

year.setAttribute("datetime", fullDate);

year.textContent = fullDate;


const date=  getFullYear()
console.log(date);