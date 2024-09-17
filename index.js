let textoOriginal = true;

      function mudarTexto() {
        const paragrafo = document.getElementById("texto");

        if (textoOriginal) {
          paragrafo.innerHTML = "Texto alterado!";
        } else {
          paragrafo.innerHTML = "Texto original";
        }

        // Alterna o valor da variável
        textoOriginal = !textoOriginal;
      }