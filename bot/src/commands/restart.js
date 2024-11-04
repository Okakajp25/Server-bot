import { EmbedBuilder } from 'discord.js';
/** @type {import('./index.js').Command} */
export default {
	data: {
		name: 'restart',
		description: 'Server Restart',
	},
	async execute(interaction) {
		await interaction.deferReply();
		const command = await fetch('https://minecraft.okakey.com/api/client/servers/d87510d2/command', {
			method: 'POST',
			body: JSON.stringify({
				command: "say Server is Restart after 5seconds"
			}),
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
				"Authorization": "Bearer ptlc_rWlaR0URcI1smHos3dlSwMkOYCeXZ33kYnkAkUN4LdH",
			}
		})
		sleep(5000)
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
		await interaction.editReply({ embeds: [Restart]});
	},
};

const Restart = new EmbedBuilder()
.setColor('Orange')
.setTitle('Server is Restarting')
.setTimestamp()
.setDescription('Server is Restarting!\nIP: minecraft.okakey.com\nPort: 19132')

function sleep(waitMsec) {
	var startMsec = new Date();
	while (new Date() - startMsec < waitMsec);
}
  
