import "./reset.css";
import "./style.css";

import axios from 'axios';

import Select from "../Select";
import Footer from "../Footer";

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function TimeSelect() {
    const { idFilme } = useParams();

    const timesObject =
        {
            "id": 1,
            "title": "2067",
            "posterURL": "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
            "overview": "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
            "releaseDate": "2020-10-01T00:00:00.000Z",
            "days": [
                {
                    "id": 24062021,
                    "weekday": "Quinta-feira",
                    "date": "24/06/2021",
                    "showtimes": [
                        {
                            "name": "15:00",
                            "id": 1
                        },
                        {
                            "name": "19:00",
                            "id": 2
                        }
                    ]
                },
                {
                    "id": 25062021,
                    "weekday": "Sexta-feira",
                    "date": "25/06/2021",
                    "showtimes": [
                        {
                            "name": "15:00",
                            "id": 3
                        },
                        {
                            "name": "19:00",
                            "id": 4
                        }
                    ]
                }
            ]
        };

    return (
        <div className="TimeSelect">
            <Select text="Selecione o horário" />
            {timesObject.days.map(element1 => {
                const weekday = element1.weekday;
                const date = element1.date;
                const showtimes = element1.showtimes;

                return (
                    <div className="box">
                        <h1>{weekday} - {date}</h1>
                        <div>
                            {showtimes.map(element2 => {
                                return (
                                    <button>
                                        <h2>{element2.name}</h2>
                                    </button>
                                );}
                            )}
                        </div>
                    </div>
                );}
            )}
            <Footer page="time" movieTitle={timesObject.title} moviePoster={timesObject.posterURL} />
        </div>
    );
}