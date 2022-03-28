import "./reset.css";
import "./style.css";

import axios from 'axios';

import Select from "../Select";
import Footer from "../Footer";

import { Link } from "react-router-dom";

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function TimeSelect() {
    const { idFilme } = useParams();

    const [timesObject, setTimesObject] = useState({});

    useEffect(() => {
        const requisition = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

        requisition.then(answer => {
            setTimesObject(answer.data);
        });
    }, []);

    const strObj = JSON.stringify(timesObject);

    if (strObj == "{}") {
        return (<></>);
    }
    else {
        return (
            <div className="TimeSelect">
                <Select text="Selecione o horário" />
                {timesObject.days.map(element1 => {
                    const id = element1.id;
                    const weekday = element1.weekday;
                    const date = element1.date;
                    const showtimes = element1.showtimes;
                    const to = `/assentos/${id}`;

                    return (
                        <div className="box">
                            <h1>{weekday} - {date}</h1>
                            <div>
                                {showtimes.map((element2, index) => {
                                    return (
                                        <Link to={to} key={index}>
                                            <button>
                                                <h2>{element2.name}</h2>
                                            </button>
                                        </Link>
                                    );
                                }
                                )}
                            </div>
                        </div>
                    );
                }
                )}
                <Footer page="time" movieTitle={timesObject.title} moviePoster={timesObject.posterURL} />
            </div>
        );
    }
}