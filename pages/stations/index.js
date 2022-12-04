import {verifyIdToken} from "../../utils/firebaseAdmin";
import nookies from 'nookies';
//redirect to login

function Home2(){
	return <><h1>Bruh</h1></>
}

export async function getServerSideProps(context) {
	try {
	  const cookies = nookies.get(context);
	  const token = await verifyIdToken(cookies.token);
	  const {uid,email} = token;
  
	  return {
		redirect:{
			permanent: false,
			destination: "/stations/dashboard",
		},
		props: {
		  session: `Your email is ${email} and uid is ${uid}.`
		},
	  };
	} catch (error) {
	  //redirect to login page
	  return {
		redirect: {
		  permanent: false,
		  destination: "/stations/login",
		},
		props: {},
	  };
	}
  }

export default Home2