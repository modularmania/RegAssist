const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('assigntask')
    .setDescription('Assigns a task to the given user.')
    .addStringOption((option) => option.setName('task name').setDescription('The name of the task you\'re giving.').setRequired(true))
    .addUserOption((option) => option.setName('target').setDescription('The name of the task you\'re giving.').setRequired(true))
    .addStringOption((option) => option.setName('description').setDescription('The name of the task you\'re giving.').setRequired(true))
    .addStringOption((option) => option.setName('deadline').setDescription('The name of the task you\'re giving.').setRequired(true))
    .addStringOption((option) => option.setName('priority level').setDescription('The name of the task you\'re giving.').setRequired(true).),
    async execute(interaction, userData) {
        const {pointBalance} = userData;
        pointBalance++;
        await interaction.reply(`Your balance is ${pointBalance}`)
    }
};