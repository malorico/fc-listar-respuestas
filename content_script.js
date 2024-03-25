function listarRespuestas() {
  // Obtener el contenedor que contiene todos los mensajes
  const postsContainer = document.getElementById("posts");

  // Verificar si el contenedor de publicaciones existe
  if (postsContainer) {
    // Obtener todos los mensajes dentro del contenedor
    const postElements = postsContainer.querySelectorAll('div[id^="edit"]');

    // Iterar sobre cada mensaje
    postElements.forEach((postElement) => {
      // Obtener el nombre de usuario directamente
      const username = postElement
        .querySelector('div[id^="postmenu_"] a[href^="member.php?u"]')
        .textContent.trim();
      // Verificar si el usuario es "vistor"
      if (username !== "Vistor") return;

      // Obtener el mensaje de texto directamente
      const message = postElement
        .querySelector('div[id^="post_message_"]')
        .textContent.trim();
      console.log("Mensaje:", message);
      console.log("--------------------------------------");
    });
  } else {
    console.error("No se encontró el contenedor de publicaciones.");
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "listarRespuestas") {
    listarRespuestas();
  }
});
