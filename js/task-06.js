const input = document.querySelector("#validation-input");

// === if/else if ===

input.addEventListener("blur", (event) => {
  if (!event.currentTarget.value.length) {
    input.className = "";
  } else if (
    event.currentTarget.value.length == input.getAttribute("data-length")
  ) {
    input.className = "valid";
  } else {
    input.className = "invalid";
  }
});
