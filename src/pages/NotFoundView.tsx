import {useNavigate} from "react-router";

function NotFoundView() {

	const navigate = useNavigate();
	const Home = () => {navigate("/home");};

	return (
		<>
			<span style={{
				width: "100%",
				textAlign: "center",
				position: "absolute",
				fontSize: "2rem",
				transform: "translateY(-50%)",
				top: "50%"}}>Hi! This is the developer, I couldn't be bothered to design a proper 404 page, so this is
				what you get. You went to an address that doesn't exist, so it threw and error. Press this button to
				return home.
			</span>
			<button onClick={Home} style={{
				position: "absolute",
				left: "50%",
				transform: "translateX(-50%)",
				top: "60%"
			}}>Home</button>
		</>
	)
}

export default NotFoundView;