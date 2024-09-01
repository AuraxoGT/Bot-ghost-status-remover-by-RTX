const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
require('dotenv').config();
const express = require('express');

const client = new Client({
  intents: Object.keys(GatewayIntentBits).map((a) => GatewayIntentBits[a]),
});

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('YaY Your Bot Status Changed✨');
});

app.listen(port, () => {
  console.log(`🔗 Listening to RTX: http://localhost:${port}`);
  console.log(`🔗 Powered By RTX`);
});

const statusMessages = [
  {
    name: "Meškos Irštva",
    details: "Made By AuraxoGT",
    state: "Saugau Baltarusijos Pasieni",
    largeImageKey: "large_image",
    largeImageText: "Meškos Irštva",
  },
];

let currentIndex = 0;
const channelId = '1217470859925524540';

async function login() {
  try {
    await client.login(process.env.TOKEN);
    console.log(`\x1b[36m%s\x1b[0m`, `|    🐇 Logged in as ${client.user.tag}`);
  } catch (error) {
    console.error('Failed to log in:', error);
    process.exit(1);
  }
}

function updateStatusAndSendMessages() {
  const currentStatus = statusMessages[currentIndex];

  // Set the presence with the richer data
  client.user.setPresence({
    activities: [{
      name: currentStatus.name,
      type: ActivityType.Streaming, // This can be 'Playing', 'Listening', 'Watching', etc.
      details: currentStatus.details,
      state: currentStatus.state,
      assets: {
        largeImage: currentStatus.largeImageKey, // The key of the image must be uploaded to your Discord application.
        largeText: currentStatus.largeImageText,
      },
    }],
    status: 'dnd',
  });

  const textChannel = client.channels.cache.get(channelId);
  if (textChannel) {
    textChannel.send(`Bot status is: ${currentStatus.name} - ${currentStatus.details}`);
  }

  currentIndex = (currentIndex + 1) % statusMessages.length;
}

client.once('ready', () => {
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✅ Bot is ready as ${client.user.tag}`);
  updateStatusAndSendMessages();

  setInterval(() => {
    updateStatusAndSendMessages();
  }, 60000);
});

login();
