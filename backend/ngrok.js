import ngrok from "ngrok";

(async function () {
  try {
    // Dodanie tokena
    await ngrok.authtoken("TWÓJ_TOKEN");

    // Uruchomienie tunelu do portu 3000
    const url = await ngrok.connect({
      addr: 3000,
      proto: "http",
    });

    console.log("Publiczny URL:", url);
  } catch (err) {
    console.error("Błąd podczas uruchamiania ngrok:", err);
  }
})();
