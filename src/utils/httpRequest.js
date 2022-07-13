import axios from 'axios';

const request = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		// 'Access-Control-Allow-Methods':
		// 	'GET, POST, PUT, DELETE, PATCH, OPTIONS',
		// 'Access-Control-Allow-Headers':
		// 	'Origin, X-Requested-With, Content-Type, Accept',
		// 'Access-Control-Allow-Credentials': 'true',
	},
});

export const get = async (path, option = {}) => {
	const res = await request.get(path, option);
	return res.data;
};
export default request;
