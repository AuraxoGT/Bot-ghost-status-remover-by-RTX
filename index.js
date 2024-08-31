/**
 ██████╗░████████╗██╗░░██╗           
 ██╔══██╗╚══██╔══╝╚██╗██╔╝          
 ██████╔╝░░░██║░░░░╚███╔╝░          
 ██╔══██╗░░░██║░░░░██╔██╗░          
 ██║░░██║░░░██║░░░██╔╝╚██╗          
 ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          
  GIT : https://github.com/RTX-GAMINGG/Bot-ghost-status-remover-by-RTX
  DISCORD SERVER : https://discord.gg/FUEHs7RCqz
  YOUTUBE : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
 * **********************************************
 *   Code by RTX GAMING
 * **********************************************
 */

const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
require('dotenv').config();
const express = require('express');
const client = new Client({
  intents: Object.keys(GatewayIntentBits).map((a) => {
    return GatewayIntentBits[a];
  }),
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
    name: "Made By AuraxoGT",
    details: "Developed by AuraxoGT",
    state: "Keeping the Border Safe",
    largeImageKey: "large_image",  // Add the name of your uploaded large image asset
    largeImageText: "Meškos Irštva",  // Tooltip for the large image
    smallImageKey: "small_image",  // Add the name of your uploaded small image asset
    smallImageText: "RTX GAMING",  // Tooltip for the small image
  },
  {
    name: "Saugau Baltarusijos Pasieni",
    details: "Guarding the Belarus Border",
    state: "Under Surveillance",
    largeImageKey: "large_image",
    largeImageText: "Saugau Pasieni",
    smallImageKey: "small_image",
    smallImageText: "",
  },
  {
    name: "Meškos Irštva",
    details: "The Bear's Lair",
    state: "In the Wilderness",
    largeImageKey: "large_image",
    largeImageText: "Meškos Irštva",
    smallImageKey: "small_image",
    smallImageText: "RTX GAMING",
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

  client.user.setPresence({
    activities: [{
      name: currentStatus.name,
      type: ActivityType.Playing,  // Change this as needed (e.g., ActivityType.Watching, ActivityType.Listening)
      details: currentStatus.details,
      state: currentStatus.state,
      assets: {
        large_image: currentStatus.largeImageKey,
        large_text: currentStatus.largeImageText,
        small_image: currentStatus.smallImageKey,
        small_text: currentStatus.smallImageText,
      },
    }],
    status: 'dnd',
  });

  const textChannel = client.channels.cache.get(channelId);

  if (textChannel instanceof TextChannel) {
    textChannel.send(`Bot status is: ${currentStatus.name}`);
  } else {
    console.warn(`Channel with ID ${channelId} is not a text channel or does not exist.`);
  }

  currentIndex = (currentIndex + 1) % statusMessages.length;
}

client.once('ready', () => {
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✅ Bot is ready as ${client.user.tag}`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✨HAPPY NEW YEAR MY DEAR FAMILY`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    ❤️WELCOME TO 2024`);
  updateStatusAndSendMessages();

  setInterval(() => {
    updateStatusAndSendMessages();
  }, 60000);
});

login();

/**
 ██████╗░████████╗██╗░░██╗           
 ██╔══██╗╚══██╔══╝╚██╗██╔╝          
 ██████╔╝░░░██║░░░░╚███╔╝░          
 ██╔══██╗░░░██║░░░░██╔██╗░          
 ██║░░██║░░░██║░░░██╔╝╚██╗          
 ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          
GIT : https://github.com/RTX-GAMINGG/Bot-ghost-status-remover-by-RTX
  DISCORD SERVER : https://discord.gg/FUEHs7RCqz
  YOUTUBE : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
 * **********************************************
 *   Code by RTX GAMING
 * **********************************************
 */
