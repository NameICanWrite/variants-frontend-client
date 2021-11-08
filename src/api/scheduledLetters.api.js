import ApiCore from "../utils/api-utils/ApiCore";



const scheduledLettersApi = new ApiCore({
	getAll: true,
	getSingle: true,
	post: true,
	put: false,
	patch: true,
	delete: false,
	url: `letters/scheduled-letters`,
});


export default scheduledLettersApi;