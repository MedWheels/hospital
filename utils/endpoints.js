// const host = "http://localhost:4000/api"		//testing
const host = "https://medwheels.vercel.app/api"	//production

const endpoints = {

	hospitals:{
		getToken: host+"/hospitals/getToken?username=",
		setToken: host+"/hospitals/setToken",
	},
	stations:{
		getToken: host+"/stations/getToken?username=",
		setToken: host+"/stations/setToken",
	},

	accept: host+"/acceptRequest",

	
};

export default endpoints;