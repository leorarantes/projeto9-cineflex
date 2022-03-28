import "./reset.css";
import "./style.css";

export default function Select(props) {
    const {text} = props;
    return (
        <div className="Select">
            <h1>{text}</h1>
        </div>
    );
}