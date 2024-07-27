document.getElementById("encrypt-button").addEventListener("click", () => {
  const textInput = document.getElementById("text-input").value;
  const encryptedText = encrypt(textInput.toLowerCase());
  editOutputMessage(encryptedText);
});

document.getElementById("decrypt-button").addEventListener("click", () => {
  const textInput = document.getElementById("text-input").value;
  const decryptedText = decrypt(textInput.toLowerCase());
  editOutputMessage(decryptedText);
});

document.getElementById("copy-button").addEventListener("click", () => {
  const outputMessage = document.getElementById("output-message").innerText;
  if (outputMessage && outputMessage !== "Ningún mensaje fue encontrado") {
    navigator.clipboard
      .writeText(outputMessage)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Texto copiado al portapapeles",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Error al copiar el texto",
          text: err,
        });
      });
  } else {
    Swal.fire({
      icon: "info",
      title: "No hay texto para copiar",
    });
  }
});

function encrypt(text) {
  if (!text) return "";
  return text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function decrypt(text) {
  if (!text) return "";
  return text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function editOutputMessage(text) {
  document.getElementById("output-message").innerText =
    text || "Ningún mensaje fue encontrado";
  document.querySelector(".output-section img").style.display = "none";
  document.querySelector(".output-section .advice-info").style.display = "none";
  document.querySelector(".output-section").classList.add("customClass");
  document.querySelector(".output-section .message").classList.add("new-style");
  document.getElementById("copy-button").style.display = "block";
}
