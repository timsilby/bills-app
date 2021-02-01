import axios from "axios";
import getTokenHeader from "./getTokenHeader"


// Functions to make calls to api endpoint. Each function gets an auth token and attaches it to
// the request.
const apiRequest = {

	baseUrl: "http://localhost:3001/api",

	getEntries: async function (url) {

		const requestURL = `${this.baseUrl}${url}`
		const tokenHeader = await getTokenHeader();
		return await axios.get(requestURL, tokenHeader);

	},

	getEntryById: async function (url) {

		const requestURL = `${this.baseUrl}${url}`
		const tokenHeader = await getTokenHeader();
		return await axios.get(requestURL, tokenHeader);

	},

	createEntry: async function(url, data) {

		const requestURL = `${this.baseUrl}${url}`
		const tokenHeader = await getTokenHeader();
		return await axios.post(requestURL, data, tokenHeader);

	},

	updateEntry: async function(url, data) {

		const requestURL = `${this.baseUrl}${url}`
		const tokenHeader = await getTokenHeader();
		return await axios.put(requestURL, data, tokenHeader);

	},

	deleteEntry: async function (url) {

		const requestURL = `${this.baseUrl}${url}`
		const tokenHeader = await getTokenHeader();
		return await axios.delete(requestURL, tokenHeader);

	},

};

export default apiRequest;