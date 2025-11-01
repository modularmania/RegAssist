const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('greet')
    .setDescription("Greets the server user"),
    async execute(interaction, userData) {
        await interaction.reply(`Hello ${interaction.user.username}!`);
    }
}