const io = require("socket.io-client");
const socket = io.connect("http://localhost:3000", {
  extraHeaders: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsInVzZXJuYW1lIjoidGVzdDEiLCJpYXQiOjE2NzYyNzM3NjN9.XJpv5AgxFeRGac6QZZG-5XpClFvzGA0RfPn3K6IVhBA",
  },
});

socket.on("connect", () => {
  console.log("Connected to socket.io server");
});

socket.on("disconnect", () => {
  console.log("Disconnected from socket.io server");
});

socket.on("message", (data) => {
  console.log(
    "Received message from",
    data["username"],
    "and message is:",
    data["message"]
  );
});

// Send a message to the server
socket.emit("message", "Hello, socket.io server From Client1");
