import "./reset.css";
import "./style.css";

import Select from "../Select";
import Footer from "../Footer";

export default function SeatSelect() {
    let seatsObject = {
        "id": 1,
        "name": "15:00",
        "day": {
            "id": 24062021,
            "weekday": "Quinta-feira",
            "date": "24/06/2021",
        },
        "movie": {
            "id": 1,
            "title": "2067",
            "posterURL": "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
            "overview": "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
            "releaseDate": "2020-10-01T00:00:00.000Z",
        },
        "seats": [
            {
                "id": 1,
                "name": "1",
                "isAvailable": true,
            },
            {
                "id": 2,
                "name": "2",
                "isAvailable": true,
            },
            {
                "id": 3,
                "name": "3",
                "isAvailable": true,
            },
            {
                "id": 4,
                "name": "4",
                "isAvailable": true,
            },
            {
                "id": 5,
                "name": "5",
                "isAvailable": true,
            },
            {
                "id": 6,
                "name": "6",
                "isAvailable": true,
            },
            {
                "id": 7,
                "name": "7",
                "isAvailable": true,
            },
            {
                "id": 8,
                "name": "8",
                "isAvailable": true,
            },
            {
                "id": 9,
                "name": "9",
                "isAvailable": true,
            },
            {
                "id": 10,
                "name": "10",
                "isAvailable": true,
            },
            {
                "id": 11,
                "name": "11",
                "isAvailable": true,
            },
            {
                "id": 12,
                "name": "12",
                "isAvailable": true,
            },
            {
                "id": 13,
                "name": "13",
                "isAvailable": true,
            },
            {
                "id": 14,
                "name": "14",
                "isAvailable": true,
            },
            {
                "id": 15,
                "name": "15",
                "isAvailable": true,
            },
            {
                "id": 16,
                "name": "16",
                "isAvailable": true,
            },
            {
                "id": 17,
                "name": "17",
                "isAvailable": true,
            },
            {
                "id": 18,
                "name": "18",
                "isAvailable": true,
            },
            {
                "id": 19,
                "name": "19",
                "isAvailable": true,
            },
            {
                "id": 20,
                "name": "20",
                "isAvailable": true,
            },
            {
                "id": 21,
                "name": "21",
                "isAvailable": true,
            },
            {
                "id": 22,
                "name": "22",
                "isAvailable": true,
            },
            {
                "id": 23,
                "name": "23",
                "isAvailable": true,
            },
            {
                "id": 24,
                "name": "24",
                "isAvailable": true,
            },
            {
                "id": 25,
                "name": "25",
                "isAvailable": true,
            },
            {
                "id": 26,
                "name": "26",
                "isAvailable": true,
            },
            {
                "id": 27,
                "name": "27",
                "isAvailable": true,
            },
            {
                "id": 28,
                "name": "28",
                "isAvailable": true,
            },
            {
                "id": 29,
                "name": "29",
                "isAvailable": true,
            },
            {
                "id": 30,
                "name": "30",
                "isAvailable": true,
            },
            {
                "id": 31,
                "name": "31",
                "isAvailable": true,
            },
            {
                "id": 32,
                "name": "32",
                "isAvailable": true,
            },
            {
                "id": 33,
                "name": "33",
                "isAvailable": true,
            },
            {
                "id": 34,
                "name": "34",
                "isAvailable": true,
            },
            {
                "id": 35,
                "name": "35",
                "isAvailable": true,
            },
            {
                "id": 36,
                "name": "36",
                "isAvailable": true,
            },
            {
                "id": 37,
                "name": "37",
                "isAvailable": true,
            },
            {
                "id": 38,
                "name": "38",
                "isAvailable": true,
            },
            {
                "id": 39,
                "name": "39",
                "isAvailable": true,
            },
            {
                "id": 40,
                "name": "40",
                "isAvailable": true,
            },
            {
                "id": 41,
                "name": "41",
                "isAvailable": true,
            },
            {
                "id": 42,
                "name": "42",
                "isAvailable": true,
            },
            {
                "id": 43,
                "name": "43",
                "isAvailable": true,
            },
            {
                "id": 44,
                "name": "44",
                "isAvailable": true,
            },
            {
                "id": 45,
                "name": "45",
                "isAvailable": true,
            },
            {
                "id": 46,
                "name": "46",
                "isAvailable": true,
            },
            {
                "id": 47,
                "name": "47",
                "isAvailable": true,
            },
            {
                "id": 48,
                "name": "48",
                "isAvailable": true,
            },
            {
                "id": 49,
                "name": "49",
                "isAvailable": true,
            },
            {
                "id": 50,
                "name": "50",
                "isAvailable": true,
            },
        ]
    };

    seatsObject.seats.forEach((element, index) => {
        seatsObject.seats[index] = { ...element, "isSelected": false };
    });

    return (
        <div className="SeatSelect">
            <Select text="Selecione o(s) assento(s)" />
            <div className="seats-box">
                {seatsObject.seats.map(element => {
                    const { id, num, isAvailable, isSelected } = element;
                    if (isAvailable === false) {
                        return (
                            <div className="seat unavailable">
                                <h2>{id}</h2>
                            </div>
                        );
                    }
                    else {
                        if (isSelected === false) {
                            return (
                                <div className="seat not-selected">
                                    <h2>{id}</h2>
                                </div>
                            );
                        }
                        else {
                            return (
                                <div className="seat selected">
                                    <h2>{id}</h2>
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
                <input type="text" placeholder="Digite seu nome..."></input>
                <h1>CPF do comprador:</h1>
                <input type="text" placeholder="Digite seu CPF..."></input>
            </div>
            <button><h1>Reservar assento(s)</h1></button>
            <Footer page="seats" movieTitle={seatsObject.movie.title} moviePoster={seatsObject.movie.posterURL} weekday={seatsObject.day.weekday} time={seatsObject.name} />
        </div>
    );
}