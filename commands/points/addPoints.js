const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('addpoints')
    .setDescription('Adds points to the user\'s balance.')
    .addNumberOption()
    .addUserOption(),
    async execute(interaction, userData) {
        const {pointBalance} = userData;
        pointBalance++;
        await interaction.reply(`Your balance is ${pointBalance}`)
    }
};