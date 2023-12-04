export default {
	add: async(item) => {
		storeValue('id', item,false);
	},
	clear: () => storeValue('id', undefined)
}