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
				"Authorization": "Bearer ptlc_V8uozU7AcoHZefVB3IY1ZXL2fwfFdN7ZxsieRj24prJ",
			}
		})
		await interaction.reply(`Log:\n ${server}`);
	},
};
