import "./reset.css";
import "./style.css";

import { Link } from "react-router-dom";

export default function Order() {
    const movie = localStorage.getItem("movie");
    const date = localStorage.getItem("date");
    const personName = localStorage.getItem("personName");
    const personCPF = localStorage.getItem("personCPF");
    const seats = JSON.parse(localStorage.getItem("seats"));

    return (
        <div className="Order">
            <h1 className="done">Pedido feito com sucesso!</h1>
            <div className="box">
                <h1>Filme e sessão</h1>
                <h2>{movie}</h2>
                <h2>{date}</h2>
            </div>
            <div className="box">
                <h1>Ingressos</h1>
                {seats.map(element => { return (<h2>Assento {element}</h2>);})}
            </div>
            <div className="box">
                <h1>Comprador</h1>
                <h2>{personName}</h2>
                <h2>{personCPF}</h2>
            </div>
            <Link to="/">
            <button><h1>Voltar para home</h1></button>
            </Link>
        </div>
    );
}