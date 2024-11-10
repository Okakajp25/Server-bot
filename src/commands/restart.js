import { EmbedBuilder } from 'discord.js';
/** @type {import('./index.js').Command} */
export default {
	data: {
		name: 'restart',
		description: 'Server Restart',
	},
	async execute(interaction) {
		await interaction.deferReply();
		const command = await fetch('https://minecraft.okakey.com/api/client/servers/d0fdc5a3/command', {
			method: 'POST',
			body: JSON.stringify({
				command: "say Server is Restart after 1minutes"
			}),
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
				"Authorization": "Bearer ptlc_bq16WdDESYCieNI3xPJtm1A6ii2J9sYvjoybr8QCogs",
			}
		})
		sleep(60000)
		const server = await fetch('https://minecraft.okakey.com/api/client/servers/d0fdc5a3/power', {
			method: 'POST',
			body: JSON.stringify({
				signal: "restart"
			}),
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
				"Authorization": "Bearer ptlc_bq16WdDESYCieNI3xPJtm1A6ii2J9sYvjoybr8QCogs",
			}
		})
		await interaction.editReply({ embeds: [Restart]});
	},
};

const Restart = new EmbedBuilder()
.setColor('Orange')
.setTitle('Server is Restarting')
.setTimestamp()
.setDescription(`Server is Restarting!\nIP: minecraft.okakey.com\nPort: 19132\n${new Date().getTimezoneOffset('+0900')}`)

function sleep(waitMsec) {
	var startMsec = new Date();
	while (new Date() - startMsec < waitMsec);
}
  
