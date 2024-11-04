import { EmbedBuilder } from 'discord.js';
/** @type {import('./index.js').Command} */
export default {
	data: {
		name: 'stop',
		description: 'Server Stop',
	},
	async execute(interaction) {
		const server = await fetch('https://minecraft.okakey.com/api/client/servers/d87510d2/power', {
			method: 'POST',
			body: JSON.stringify({
				signal: "stop"
			}),
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
				"Authorization": "Bearer ptlc_rWlaR0URcI1smHos3dlSwMkOYCeXZ33kYnkAkUN4LdH",
			}
		})
		await interaction.reply({ embeds: [Stop]});
	},
};

const Stop = new EmbedBuilder()
.setColor('Red')
.setTitle('Server is Stopping')
.setTimestamp()
.setDescription('Server stopped')