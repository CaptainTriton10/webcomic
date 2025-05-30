import {useNavigate, useParams} from "react-router";
import NotFoundView from "./NotFoundView";
import styles from "./ComicPage.module.css"
import Comic from "../components/Comic";

function ComicPage() {
    const {id} = useParams() as { id: string };
    const navigate = useNavigate();

    const thisPage = parseInt(id) ? parseInt(id) : 1;

    const ToPreviousPage = () => {
        navigate(`/chapter/${thisPage - 1}`);
    }
    const ToHome = () => {
        navigate("/home");
    }
    const ToNextPage = () => {
        navigate(`/chapter/${thisPage + 1}`);
    }

    if (id === "1") {
        return (
            <>
                <div>
                    <h1>Chapter {id}</h1>
                </div>
                <div className={styles.comics}>
                    <Comic src="https://upload.wikimedia.org/wikipedia/en/d/d0/Loss_comic.jpg" alt="loss.jpg"/>
                    <Comic
                        src="https://pyxis.nymag.com/v1/imgs/95c/d9b/e892e82533bbdb556f89c3756d1d76c24b-loss-overhead.w710.jpg"
                        alt="loss2.jpg"/>
                    <Comic src="https://i.pinimg.com/736x/80/91/79/80917990c66d2ee42efabffe68cd1d19.jpg"
                           alt="loss3.jpg"/>
                </div>
                <div className={styles.navigationBar}>
                    <button onClick={ToPreviousPage}>Previous</button>
                    <button onClick={ToHome}>Home</button>
                    <button onClick={ToNextPage}>Next</button>
                </div>
            </>
        );
    } else {
        return <NotFoundView/> // Send user to 404 page.
    }
}

export default ComicPage;
