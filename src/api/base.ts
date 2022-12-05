import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
	baseURL: BASE_URL,
});

api.interceptors.request.use(
	(config) => {
		//Do something before request is sent
		return config;
	},
	function (error) {
		//Do something with the request error
		return Promise.reject(error);
	}
);

api.interceptors.response.use(
	(response) => {
		//Do something with response data
		return response;
	},
	function (error) {
		//Any status code that falls outside the range of 2xx triggers this function
		//Do something with the response error
		return Promise.reject(error);
	}
);

const { get, post, put, delete: destroy } = api;
export { get, post, put, destroy };
