import axios from 'axios';
import {
	handleResponse,
	handleError
} from './handleResponse';

// Define your api url from any source.
// Pulling from your .env file when on the server or from localhost when locally

const DEFAULT_BASE_URL = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PRODUCTION_SERVER : process.env.REACT_APP_DEVELOPMENT_SERVER



const createApiProvider = (BASE_URL = DEFAULT_BASE_URL) => ({
	getAll: (resource) => {
		return axios
			.get(`${BASE_URL}/${resource}`)
			.then(handleResponse)
			.catch(handleError);
	},

	getSingle: (resource, id) => {
		return axios
			.get(`${BASE_URL}/${resource}/${id}`)
			.then(handleResponse)
			.catch(handleError);
	},

	post: (resource, model) => {
		return axios
			.post(`${BASE_URL}/${resource}`, model)
			.then(handleResponse)
			.catch(handleError);
	},

	put: (resource, model) => {
		return axios
			.put(`${BASE_URL}/${resource}`, model)
			.then(handleResponse)
			.catch(handleError);
	},

	patch: (resource, model) => {
		return axios
			.patch(`${BASE_URL}/${resource}`, model)
			.then(handleResponse)
			.catch(handleError);
	},

	remove: (resource, id) => {
		return axios
			.delete(`${BASE_URL}/${resource}`, id)
			.then(handleResponse)
			.catch(handleError);
	},
})

export default createApiProvider