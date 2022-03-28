import "./reset.css";
import "./style.css";

import axios from 'axios';

import Select from "../Select";

import { Link } from "react-router-dom";

import { useState, useEffect } from 'react';

export default function MovieSelect() {
    const [moviesArray, setMoviesArray] = useState([]);

	useEffect(() => {
		const requisition = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

		requisition.then(answer => {
			setMoviesArray(answer.data);
		});
	}, []);

    return (
        <div className="MovieSelect">
            <Select text="Selecione o filme"/>
            {moviesArray.map((element, index) => {
                const {id, posterURL} = element;
                const to = `/sessoes/${id}`;
                return (
                    <Link to={to} key={index}>
                    <div className="movie-box">
                        <img src={posterURL} />
                        <div className="cape"></div>
                    </div>
                    </Link>
                );                
            })}
        </div>
    );
}