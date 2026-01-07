const chatIcon = document.getElementById("chat-icon");
const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const messages = document.getElementById("chat-messages");

// Toggle chat
chatIcon.onclick = () => {
  chatBox.style.display =
    chatBox.style.display === "none" ? "flex" : "none";
};

// Knowledge base
const botReplies = [
  { keywords: ["hi", "hello"], reply: "Hello 👋 How can I help you?" },
  { keywords: ["price", "pricing"], reply: "Our pricing starts from $10/month." },
  { keywords: ["service"], reply: "We offer website and chatbot services." },
  { keywords: ["contact"], reply: "Email us at support@example.com" },
  { keywords: ["bye", "thanks"], reply: "Thanks for chatting 😊" }
];

// Function to send message
function sendMessage() {
  const userText = input.value.trim();
  if (userText === "") return;

  messages.innerHTML += `<p><b>You:</b> ${userText}</p>`;

  let botMessage = "Sorry, I didn't understand that.";

  for (let item of botReplies) {
    if (item.keywords.some(word => userText.toLowerCase().includes(word))) {
      botMessage = item.reply;
      break;
    }
  }

  setTimeout(() => {
    messages.innerHTML += `<p><b>Bot:</b> ${botMessage}</p>`;
    messages.scrollTop = messages.scrollHeight;
  }, 500);

  input.value = "";
}

// Send on button click
sendBtn.onclick = sendMessage;

// Send on Enter key
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
