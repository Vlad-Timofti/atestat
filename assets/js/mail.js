// Obțineți referința la formă 
const form = document.querySelector("form");

// Adăugați un eveniment de submit la formă
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Previne trimiterea implicită a formei

  // Obțineți datele din formă
  const name = form.querySelector("#name").value;
  const email = form.querySelector("#email").value;
  const message = form.querySelector("#message").value;

  // Trimiteți datele prin intermediul unui script de server (de exemplu, PHP)
  fetch("send-email.php", {
    method: "POST",
    body: JSON.stringify({ name, email, message }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("E-mail-ul a fost trimis cu succes!");
      } else {
        alert("A apărut o eroare la trimiterea e-mail-ului");
      }
    });
});