const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('pointbalance')
    .setDescription('Shows the user their point balance.'),
    async execute(interaction, userData) {
        const {pointBalance} = userData;
        await interaction.reply(`Your balance is ${pointBalance}`)
    }
};