import { EmbedBuilder } from 'discord.js';
/** @type {import('./index.js').Command} */
export default {
	data: {
		name: 'start',
		description: 'Server Start',
	},
	async execute(interaction) {
		const server = await fetch('https://minecraft.okakey.com/api/client/servers/d0fdc5a3/power', {
			method: 'POST',
			body: JSON.stringify({
				signal: "start"
			}),
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
				"Authorization": "Bearer ptlc_bq16WdDESYCieNI3xPJtm1A6ii2J9sYvjoybr8QCogs",
			}
		})
		await interaction.reply({ embeds: [Start]});
	},
};

const Start = new EmbedBuilder()
.setColor('Green')
.setTitle('Server is Starting')
.setTimestamp()
.setDescription(`IP: minecraft.okakey.com\nPort: 19132\n${new Date().getTimezoneOffset('+0900')}`)