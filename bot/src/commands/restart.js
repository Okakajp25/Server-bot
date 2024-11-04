import { EmbedBuilder } from 'discord.js';
/** @type {import('./index.js').Command} */
export default {
	data: {
		name: 'restart',
		description: 'Server Restart',
	},
	async execute(interaction) {
		const server = await fetch('https://minecraft.okakey.com/api/client/servers/d87510d2/power', {
			method: 'POST',
			body: JSON.stringify({
				signal: "restart"
			}),
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
				"Authorization": "Bearer ptlc_rWlaR0URcI1smHos3dlSwMkOYCeXZ33kYnkAkUN4LdH",
			}
		})
		await interaction.reply({ embeds: [Start]});
	},
};

const Start = new EmbedBuilder()
.setColor('Orange')
.setTitle('Server is Restarting')
.setTimestamp()
.setDescription('Server si Restarting!\nIP: minecraft.okakey.com\nPort: 19132')