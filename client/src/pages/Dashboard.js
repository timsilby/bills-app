import { useState, useEffect } from "react";
import apiRequest from "../utils/apiRequest";
import { useAuth } from "../utils/useAuth"


const Dashboard = () => {

	const [data, setData] = useState();
	const auth = useAuth();
	const fireUid = auth.user.uid;

// 	const doc = {
// 		"title": "Internet",
// 		"amount": 75,
// 	"fireUid": fireUid
// }

	useEffect(() => {

	}, [])


	const dosomething = async () => {

		const dbdata = await apiRequest.getEntries(`/api/bills/${fireUid}`)
		// const dbdata = await apiRequest.createEntry(`/api/bills/${fireUid}`, doc)
		// const dbdata = await apiRequest.getEntryById(`/api/bills?id=60177615651d8c5918ceabb9`, doc)
		// const dbdata = await apiRequest.updateEntry(`/api/bills?id=60176cc03e35081734d0c0c7`, doc)
		// const dbdata = await apiRequest.deleteEntry(`/api/bills?id=60177615651d8c5918ceabb9`)
		setData(JSON.stringify(dbdata.data));

	}


	return (
		<div>
			<h1>Dashboard</h1>
			<button onClick={dosomething}>Do something</button>
			{data}
		</div>
	);

}

export default Dashboard;
