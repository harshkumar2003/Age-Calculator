function calAge() {
  const datepart = document.getElementById("date-part").value;
  const resBirth = document.getElementById("result");
  if (datepart) {
    const today = new Date();
    const birthDate = new Date(datepart);
    let ageYear = today.getFullYear() - birthDate.getFullYear();
    let ageMon = today.getMonth() - birthDate.getMonth();
    let ageDay = today.getDate() - birthDate.getDate();

    if (ageDay < 0) {
      ageMon--;
      ageDay += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMon < 0) {
      ageYear--;
      ageMon += 12;
    }
    resBirth.innerText = `Your Age is   ${ageYear}  years , ${ageMon}  Months   , and ${ageDay} Days`;
  } else {
    resBirth.innerText = "Enter Your BirtDate";
  }
}
