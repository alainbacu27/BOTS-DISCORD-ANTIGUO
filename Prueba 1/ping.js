const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
   console.log("Estoy listo!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!"); 
  }
});
client.login("NTY0MzMzOTI3OTk3NjM2NjA4.XKmXHg.PzYg5V603Ac9LPib0q6RMRGqkHI");
