const sendBtn = document.getElementById("sendBtn");
const input = document.getElementById("userInput");

sendBtn.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        alert("You typed: " + input.value);
        input.value = "";
    }
});
