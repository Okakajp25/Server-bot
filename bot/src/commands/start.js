import { EmbedBuilder } from 'discord.js';
/** @type {import('./index.js').Command} */
export default {
	data: {
		name: 'start',
		description: 'Server Start',
	},
	async execute(interaction) {
		const server = await fetch('https://minecraft.okakey.com/api/client/servers/d87510d2/power', {
			method: 'POST',
			body: JSON.stringify({
				signal: "start"
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
.setColor('Green')
.setTitle('Server is Starting')
.setTimestamp()
.setDescription('IP: minecraft.okakey.com\nPort: 19132')