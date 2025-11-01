const fs = require("node:fs");
const path = require("node:path");

const {Client, Events, Collection, GatewayIntentBits} = require("discord.js");
const mongoose = require('mongoose');
const {token, mongoConnection} = require("./config.json");
const {getOrCreateUser} = require("./db/userHelper");

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);

        if ('data' in command && 'execute' in command) {
            client.commands.set(command.data.name, command);
        } else {
            console.log(`The command at ${filePath} is missing data and or execute properties.`);
        }
    }
}

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        const userData = await getOrCreateUser(interaction.user.id, interaction.guild.id);

        await command.execute(interaction, userData);
    } catch(error) {
        console.error(error);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({content: "There was an error while executing this command.", ephemeral: true});
        } else {
            await interaction.reply({content: "There was an error while executing this command.", ephemeral: true});
        }
    }
})

client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
})

async function serverConnect() {
    try {
        await mongoose.connect(mongoConnection);
        console.log('Successfully connected to the DB.');
    } catch (err) {
        console.log(`Error connecting to mongodb: ${err}`);
    }
}

serverConnect();

client.login(token);