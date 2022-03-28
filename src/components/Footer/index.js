import "./reset.css";
import "./style.css";

export default function Footer(props) {

    if (props.page === "time") {
        const { page, movieTitle, moviePoster } = props;

        return (
            <footer className="Footer">
                <div>
                    <img src={moviePoster} />
                </div>
                <div>
                    <h1>{movieTitle}</h1>
                </div>
            </footer>
        );
    }
    else {
        const { page, movieTitle, moviePoster, weekday, time } = props;

        return (
            <footer className="Footer">
                <div>
                    <img src={moviePoster} />
                </div>
                <div>
                    <h1>{movieTitle}</h1>
                    <h1>{weekday} - {time}</h1>
                </div>
            </footer>
        );
    }
}