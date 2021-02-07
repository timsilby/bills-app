import { useState } from "react";
import { useAuth } from "../../utils/useAuth";
import Button from "@material-ui/core/Button";
import AppbarDrawer from "../AppBarDrawer/AppbarDrawer";
import AddBillDialog from "./AddBillDialog";


const Bills = () => {

	const [dialogOpen, setDialogOpen] = useState(false);

	const auth = useAuth();
	console.log("bills");
	console.log(auth.user);

	const toggleDialog = () => setDialogOpen(!dialogOpen);

	return (

		<AppbarDrawer>

			<h1>Bills</h1>
			<AddBillDialog open={dialogOpen} toggleDialog={toggleDialog} />
			<Button onClick={toggleDialog}>Add Bill</Button>

		</AppbarDrawer>

	);

}

export default Bills;