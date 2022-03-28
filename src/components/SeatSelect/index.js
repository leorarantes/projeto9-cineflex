import "./reset.css";
import "./style.css";

import axios from 'axios';

import Select from "../Select";
import Footer from "../Footer";

import { Link } from "react-router-dom";

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function SeatSelect() {
    const { idSessao } = useParams();

    const [seatsObject, setSeatsObject] = useState({});
    const [personName, setPersonName] = useState("");
    const [personCPF, setPersonCPF] = useState("");

    useEffect(() => {
        const requisition = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

        requisition.then(answer => {
            setSeatsObject(answer.data);
        });
    }, []);

    const strObj = JSON.stringify(seatsObject);

    function selectSeat(isSelected, index) {
        if(isSelected === false) {
            let newObject =  {...seatsObject};
            newObject.seats[index].isSelected = true;
            setSeatsObject({...newObject});
        }
        else {
            let newObject =  {...seatsObject};
            newObject.seats[index].isSelected = false;
            setSeatsObject({...newObject});
        }
    }

    function reserveSeats(seatsObj) {
        let newObject = {ids: [], name: "", cpf: ""};
        seatsObj.seats.forEach(element => {
            if(element.isSelected === true) {
                newObject.ids.push(element.id);
                newObject.name = personName;
                newObject.cpf = personCPF;
                localStorage.setItem("movie", seatsObj.movie.title);
                localStorage.setItem("date", seatsObj.day.date);
                localStorage.setItem("personName", personName);
                localStorage.setItem("personCPF", personCPF);
                localStorage.setItem("seats", JSON.stringify(newObject.ids));
                axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', newObject);
            }
        });
    }

    if (strObj === "{}") {
        return (<></>);
    }
    else {
        let seatsObjectAux = { ...seatsObject };

        seatsObjectAux.seats.forEach((element, index) => {
            if(seatsObjectAux.seats[index].isSelected === undefined) {
                seatsObjectAux.seats[index] = { ...element, "isSelected": false };
            }
        });
        return (
            <div className="SeatSelect">
                <Select text="Selecione o(s) assento(s)" />
                <div className="seats-box">
                    {seatsObject.seats.map((element, index) => {
                        const { id, name, isAvailable, isSelected } = element;
                        if (isAvailable === false) {
                            return (
                                <div className="seat unavailable">
                                    <h2>{name}</h2>
                                </div>
                            );
                        }
                        else {
                            if (isSelected === false) {
                                return (
                                    <div onClick={() => selectSeat(false, index)} className="seat not-selected">
                                        <h2>{name}</h2>
                                    </div>
                                );
                            }
                            else {
                                return (
                                    <div onClick={() => selectSeat(true, index)} className="seat selected">
                                        <h2>{name}</h2>
                                    </div>
                                );
                            }
                        }
                    })}
                </div>
                <div className="subtitle-box">
                    <div className="subtitle-box-box">
                        <div className="seat selected">
                        </div>
                        <h2>Selecionado</h2>
                    </div>
                    <div className="subtitle-box-box">
                        <div className="seat not-selected">
                        </div>
                        <h2>Disponível</h2>
                    </div>
                    <div className="subtitle-box-box">
                        <div className="seat unavailable">
                        </div>
                        <h2>Indisponível</h2>
                    </div>
                </div>
                <div className="inputs-box">
                    <h1>Nome do comprador:</h1>
                    <input type="text" placeholder="Digite seu nome..." value={personName} onChange={e => setPersonName(e.target.value)}></input>
                    <h1>CPF do comprador:</h1>
                    <input type="text" placeholder="Digite seu CPF..." value={personCPF} onChange={e => setPersonCPF(e.target.value)}></input>
                </div>
                <Link to="/sucesso">
                <button onClick={() => reserveSeats(seatsObject)}><h1>Reservar assento(s)</h1></button>
                </Link>
                <Footer page="seats" movieTitle={seatsObject.movie.title} moviePoster={seatsObject.movie.posterURL} weekday={seatsObject.day.weekday} time={seatsObject.name} />
            </div>
        );
    }
}