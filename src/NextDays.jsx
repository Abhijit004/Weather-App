import React from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import WeatherIcon from "./WeatherIcon";
import sprite from "./assets/iconSprites.svg";

const img = new Image();

var info = {
    cod: "200",
    message: 0,
    cnt: 40,
    list: [
        {
            dt: 1704531600,
            main: {
                temp: 271.74,
                feels_like: 268.78,
                temp_min: 271.23,
                temp_max: 271.74,
                pressure: 1016,
                sea_level: 1016,
                grnd_level: 976,
                humidity: 78,
                temp_kf: 0.51,
            },
            weather: [
                {
                    id: 600,
                    main: "Snow",
                    description: "light snow",
                    icon: "13n",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 2.22,
                deg: 133,
                gust: 4.65,
            },
            visibility: 6233,
            pop: 0.93,
            snow: {
                "3h": 0.72,
            },
            sys: {
                pod: "n",
            },
            dt_txt: "2024-01-06 09:00:00",
        },
        {
            dt: 1704542400,
            main: {
                temp: 271.45,
                feels_like: 267.82,
                temp_min: 271.17,
                temp_max: 271.45,
                pressure: 1013,
                sea_level: 1013,
                grnd_level: 972,
                humidity: 86,
                temp_kf: 0.28,
            },
            weather: [
                {
                    id: 600,
                    main: "Snow",
                    description: "light snow",
                    icon: "13n",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 2.78,
                deg: 93,
                gust: 4.9,
            },
            visibility: 10000,
            pop: 0.88,
            snow: {
                "3h": 0.32,
            },
            sys: {
                pod: "n",
            },
            dt_txt: "2024-01-06 12:00:00",
        },
        {
            dt: 1704553200,
            main: {
                temp: 272.07,
                feels_like: 268.38,
                temp_min: 272.07,
                temp_max: 272.07,
                pressure: 1011,
                sea_level: 1011,
                grnd_level: 971,
                humidity: 95,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 600,
                    main: "Snow",
                    description: "light snow",
                    icon: "13d",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 2.97,
                deg: 96,
                gust: 4.92,
            },
            visibility: 221,
            pop: 0.72,
            snow: {
                "3h": 1.21,
            },
            sys: {
                pod: "d",
            },
            dt_txt: "2024-01-06 15:00:00",
        },
        {
            dt: 1704564000,
            main: {
                temp: 273.35,
                feels_like: 271.24,
                temp_min: 273.35,
                temp_max: 273.35,
                pressure: 1007,
                sea_level: 1007,
                grnd_level: 968,
                humidity: 96,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 600,
                    main: "Snow",
                    description: "light snow",
                    icon: "13d",
                },
                {
                    id: 511,
                    main: "Rain",
                    description: "freezing rain",
                    icon: "13d",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 1.76,
                deg: 80,
                gust: 2.47,
            },
            visibility: 10000,
            pop: 0.88,
            snow: {
                "3h": 0.87,
            },
            sys: {
                pod: "d",
            },
            dt_txt: "2024-01-06 18:00:00",
        },
        {
            dt: 1704574800,
            main: {
                temp: 273.43,
                feels_like: 273.43,
                temp_min: 273.43,
                temp_max: 273.43,
                pressure: 1007,
                sea_level: 1007,
                grnd_level: 967,
                humidity: 99,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04d",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 0.78,
                deg: 343,
                gust: 0.89,
            },
            visibility: 845,
            pop: 0.1,
            sys: {
                pod: "d",
            },
            dt_txt: "2024-01-06 21:00:00",
        },
        {
            dt: 1704585600,
            main: {
                temp: 273.13,
                feels_like: 271.6,
                temp_min: 273.13,
                temp_max: 273.13,
                pressure: 1007,
                sea_level: 1007,
                grnd_level: 968,
                humidity: 99,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 600,
                    main: "Snow",
                    description: "light snow",
                    icon: "13n",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 1.36,
                deg: 286,
                gust: 2.09,
            },
            visibility: 1097,
            pop: 0.2,
            snow: {
                "3h": 0.15,
            },
            sys: {
                pod: "n",
            },
            dt_txt: "2024-01-07 00:00:00",
        },
        {
            dt: 1704596400,
            main: {
                temp: 273.03,
                feels_like: 270.5,
                temp_min: 273.03,
                temp_max: 273.03,
                pressure: 1007,
                sea_level: 1007,
                grnd_level: 968,
                humidity: 99,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 600,
                    main: "Snow",
                    description: "light snow",
                    icon: "13n",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 2.04,
                deg: 242,
                gust: 3.86,
            },
            visibility: 253,
            pop: 0.22,
            snow: {
                "3h": 0.2,
            },
            sys: {
                pod: "n",
            },
            dt_txt: "2024-01-07 03:00:00",
        },
        {
            dt: 1704607200,
            main: {
                temp: 273.35,
                feels_like: 269.41,
                temp_min: 273.35,
                temp_max: 273.35,
                pressure: 1007,
                sea_level: 1007,
                grnd_level: 968,
                humidity: 98,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 600,
                    main: "Snow",
                    description: "light snow",
                    icon: "13n",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 3.59,
                deg: 239,
                gust: 8.25,
            },
            visibility: 26,
            pop: 0.8,
            snow: {
                "3h": 0.47,
            },
            sys: {
                pod: "n",
            },
            dt_txt: "2024-01-07 06:00:00",
        },
        {
            dt: 1704618000,
            main: {
                temp: 273.44,
                feels_like: 268.77,
                temp_min: 273.44,
                temp_max: 273.44,
                pressure: 1007,
                sea_level: 1007,
                grnd_level: 968,
                humidity: 98,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 600,
                    main: "Snow",
                    description: "light snow",
                    icon: "13n",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 4.7,
                deg: 251,
                gust: 10.27,
            },
            visibility: 22,
            pop: 0.78,
            snow: {
                "3h": 0.46,
            },
            sys: {
                pod: "n",
            },
            dt_txt: "2024-01-07 09:00:00",
        },
        {
            dt: 1704628800,
            main: {
                temp: 273.51,
                feels_like: 268.88,
                temp_min: 273.51,
                temp_max: 273.51,
                pressure: 1009,
                sea_level: 1009,
                grnd_level: 970,
                humidity: 98,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 600,
                    main: "Snow",
                    description: "light snow",
                    icon: "13n",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 4.67,
                deg: 252,
                gust: 10.05,
            },
            visibility: 23,
            pop: 0.79,
            snow: {
                "3h": 0.59,
            },
            sys: {
                pod: "n",
            },
            dt_txt: "2024-01-07 12:00:00",
        },
        {
            dt: 1704639600,
            main: {
                temp: 273.39,
                feels_like: 268.37,
                temp_min: 273.39,
                temp_max: 273.39,
                pressure: 1012,
                sea_level: 1012,
                grnd_level: 972,
                humidity: 98,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 600,
                    main: "Snow",
                    description: "light snow",
                    icon: "13d",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 5.29,
                deg: 263,
                gust: 11.13,
            },
            visibility: 32,
            pop: 0.8,
            snow: {
                "3h": 0.65,
            },
            sys: {
                pod: "d",
            },
            dt_txt: "2024-01-07 15:00:00",
        },
        {
            dt: 1704650400,
            main: {
                temp: 273.83,
                feels_like: 268.22,
                temp_min: 273.83,
                temp_max: 273.83,
                pressure: 1013,
                sea_level: 1013,
                grnd_level: 974,
                humidity: 93,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 600,
                    main: "Snow",
                    description: "light snow",
                    icon: "13d",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 6.74,
                deg: 272,
                gust: 11.14,
            },
            visibility: 8553,
            pop: 0.72,
            snow: {
                "3h": 0.4,
            },
            sys: {
                pod: "d",
            },
            dt_txt: "2024-01-07 18:00:00",
        },
        {
            dt: 1704661200,
            main: {
                temp: 273.62,
                feels_like: 268.01,
                temp_min: 273.62,
                temp_max: 273.62,
                pressure: 1017,
                sea_level: 1017,
                grnd_level: 978,
                humidity: 83,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04d",
                },
            ],
            clouds: {
                all: 98,
            },
            wind: {
                speed: 6.62,
                deg: 280,
                gust: 10.33,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "d",
            },
            dt_txt: "2024-01-07 21:00:00",
        },
        {
            dt: 1704672000,
            main: {
                temp: 272.69,
                feels_like: 267.63,
                temp_min: 272.69,
                temp_max: 272.69,
                pressure: 1022,
                sea_level: 1022,
                grnd_level: 982,
                humidity: 84,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04n",
                },
            ],
            clouds: {
                all: 99,
            },
            wind: {
                speed: 5.04,
                deg: 277,
                gust: 10.26,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "n",
            },
            dt_txt: "2024-01-08 00:00:00",
        },
        {
            dt: 1704682800,
            main: {
                temp: 270.61,
                feels_like: 266.87,
                temp_min: 270.61,
                temp_max: 270.61,
                pressure: 1024,
                sea_level: 1024,
                grnd_level: 984,
                humidity: 91,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04n",
                },
            ],
            clouds: {
                all: 55,
            },
            wind: {
                speed: 2.73,
                deg: 270,
                gust: 6.37,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "n",
            },
            dt_txt: "2024-01-08 03:00:00",
        },
        {
            dt: 1704693600,
            main: {
                temp: 269.15,
                feels_like: 265.41,
                temp_min: 269.15,
                temp_max: 269.15,
                pressure: 1027,
                sea_level: 1027,
                grnd_level: 987,
                humidity: 93,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 802,
                    main: "Clouds",
                    description: "scattered clouds",
                    icon: "03n",
                },
            ],
            clouds: {
                all: 31,
            },
            wind: {
                speed: 2.48,
                deg: 262,
                gust: 3.71,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "n",
            },
            dt_txt: "2024-01-08 06:00:00",
        },
        {
            dt: 1704704400,
            main: {
                temp: 268.56,
                feels_like: 265.7,
                temp_min: 268.56,
                temp_max: 268.56,
                pressure: 1029,
                sea_level: 1029,
                grnd_level: 988,
                humidity: 93,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01n",
                },
            ],
            clouds: {
                all: 7,
            },
            wind: {
                speed: 1.77,
                deg: 266,
                gust: 1.78,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "n",
            },
            dt_txt: "2024-01-08 09:00:00",
        },
        {
            dt: 1704715200,
            main: {
                temp: 268.31,
                feels_like: 268.31,
                temp_min: 268.31,
                temp_max: 268.31,
                pressure: 1030,
                sea_level: 1030,
                grnd_level: 989,
                humidity: 93,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01n",
                },
            ],
            clouds: {
                all: 10,
            },
            wind: {
                speed: 0.75,
                deg: 158,
                gust: 0.76,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "n",
            },
            dt_txt: "2024-01-08 12:00:00",
        },
        {
            dt: 1704726000,
            main: {
                temp: 271.76,
                feels_like: 268.51,
                temp_min: 271.76,
                temp_max: 271.76,
                pressure: 1031,
                sea_level: 1031,
                grnd_level: 991,
                humidity: 85,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04d",
                },
            ],
            clouds: {
                all: 72,
            },
            wind: {
                speed: 2.47,
                deg: 129,
                gust: 3.81,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "d",
            },
            dt_txt: "2024-01-08 15:00:00",
        },
        {
            dt: 1704736800,
            main: {
                temp: 274.38,
                feels_like: 270.1,
                temp_min: 274.38,
                temp_max: 274.38,
                pressure: 1028,
                sea_level: 1028,
                grnd_level: 989,
                humidity: 77,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04d",
                },
            ],
            clouds: {
                all: 85,
            },
            wind: {
                speed: 4.44,
                deg: 131,
                gust: 6.16,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "d",
            },
            dt_txt: "2024-01-08 18:00:00",
        },
        {
            dt: 1704747600,
            main: {
                temp: 274.75,
                feels_like: 270.36,
                temp_min: 274.75,
                temp_max: 274.75,
                pressure: 1025,
                sea_level: 1025,
                grnd_level: 985,
                humidity: 81,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04d",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 4.78,
                deg: 104,
                gust: 8.88,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "d",
            },
            dt_txt: "2024-01-08 21:00:00",
        },
        {
            dt: 1704758400,
            main: {
                temp: 273.05,
                feels_like: 268.2,
                temp_min: 273.05,
                temp_max: 273.05,
                pressure: 1024,
                sea_level: 1024,
                grnd_level: 984,
                humidity: 90,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04n",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 4.85,
                deg: 102,
                gust: 11.84,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "n",
            },
            dt_txt: "2024-01-09 00:00:00",
        },
        {
            dt: 1704769200,
            main: {
                temp: 273.19,
                feels_like: 268.14,
                temp_min: 273.19,
                temp_max: 273.19,
                pressure: 1020,
                sea_level: 1020,
                grnd_level: 981,
                humidity: 90,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04n",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 5.25,
                deg: 107,
                gust: 13.11,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "n",
            },
            dt_txt: "2024-01-09 03:00:00",
        },
        {
            dt: 1704780000,
            main: {
                temp: 273.92,
                feels_like: 268.61,
                temp_min: 273.92,
                temp_max: 273.92,
                pressure: 1016,
                sea_level: 1016,
                grnd_level: 977,
                humidity: 85,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04n",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 6.13,
                deg: 120,
                gust: 14.75,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "n",
            },
            dt_txt: "2024-01-09 06:00:00",
        },
        {
            dt: 1704790800,
            main: {
                temp: 273.99,
                feels_like: 268.56,
                temp_min: 273.99,
                temp_max: 273.99,
                pressure: 1013,
                sea_level: 1013,
                grnd_level: 974,
                humidity: 91,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 501,
                    main: "Rain",
                    description: "moderate rain",
                    icon: "10n",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 6.44,
                deg: 129,
                gust: 15.98,
            },
            visibility: 3450,
            pop: 0.94,
            rain: {
                "3h": 4.55,
            },
            sys: {
                pod: "n",
            },
            dt_txt: "2024-01-09 09:00:00",
        },
        {
            dt: 1704801600,
            main: {
                temp: 274.1,
                feels_like: 268.67,
                temp_min: 274.1,
                temp_max: 274.1,
                pressure: 1008,
                sea_level: 1008,
                grnd_level: 969,
                humidity: 99,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 501,
                    main: "Rain",
                    description: "moderate rain",
                    icon: "10n",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 6.51,
                deg: 126,
                gust: 17.55,
            },
            visibility: 2155,
            pop: 1,
            rain: {
                "3h": 8.25,
            },
            sys: {
                pod: "n",
            },
            dt_txt: "2024-01-09 12:00:00",
        },
        {
            dt: 1704812400,
            main: {
                temp: 277.07,
                feels_like: 271.63,
                temp_min: 277.07,
                temp_max: 277.07,
                pressure: 1002,
                sea_level: 1002,
                grnd_level: 963,
                humidity: 99,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 501,
                    main: "Rain",
                    description: "moderate rain",
                    icon: "10d",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 8.89,
                deg: 131,
                gust: 20.26,
            },
            visibility: 4014,
            pop: 1,
            rain: {
                "3h": 6.64,
            },
            sys: {
                pod: "d",
            },
            dt_txt: "2024-01-09 15:00:00",
        },
        {
            dt: 1704823200,
            main: {
                temp: 279.42,
                feels_like: 274.61,
                temp_min: 279.42,
                temp_max: 279.42,
                pressure: 995,
                sea_level: 995,
                grnd_level: 957,
                humidity: 97,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 501,
                    main: "Rain",
                    description: "moderate rain",
                    icon: "10d",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 9.27,
                deg: 141,
                gust: 20.07,
            },
            visibility: 5815,
            pop: 1,
            rain: {
                "3h": 7.19,
            },
            sys: {
                pod: "d",
            },
            dt_txt: "2024-01-09 18:00:00",
        },
        {
            dt: 1704834000,
            main: {
                temp: 281.42,
                feels_like: 277.18,
                temp_min: 281.42,
                temp_max: 281.42,
                pressure: 987,
                sea_level: 987,
                grnd_level: 950,
                humidity: 94,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 500,
                    main: "Rain",
                    description: "light rain",
                    icon: "10d",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 9.55,
                deg: 131,
                gust: 20.74,
            },
            visibility: 10000,
            pop: 1,
            rain: {
                "3h": 1.69,
            },
            sys: {
                pod: "d",
            },
            dt_txt: "2024-01-09 21:00:00",
        },
        {
            dt: 1704844800,
            main: {
                temp: 282.55,
                feels_like: 278.92,
                temp_min: 282.55,
                temp_max: 282.55,
                pressure: 985,
                sea_level: 985,
                grnd_level: 949,
                humidity: 91,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 500,
                    main: "Rain",
                    description: "light rain",
                    icon: "10n",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 8.46,
                deg: 187,
                gust: 16.12,
            },
            visibility: 10000,
            pop: 1,
            rain: {
                "3h": 0.74,
            },
            sys: {
                pod: "n",
            },
            dt_txt: "2024-01-10 00:00:00",
        },
        {
            dt: 1704855600,
            main: {
                temp: 277.98,
                feels_like: 273.53,
                temp_min: 277.98,
                temp_max: 277.98,
                pressure: 988,
                sea_level: 988,
                grnd_level: 950,
                humidity: 82,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 500,
                    main: "Rain",
                    description: "light rain",
                    icon: "10n",
                },
            ],
            clouds: {
                all: 72,
            },
            wind: {
                speed: 6.76,
                deg: 219,
                gust: 14.35,
            },
            visibility: 10000,
            pop: 0.63,
            rain: {
                "3h": 0.22,
            },
            sys: {
                pod: "n",
            },
            dt_txt: "2024-01-10 03:00:00",
        },
        {
            dt: 1704866400,
            main: {
                temp: 276.1,
                feels_like: 271.98,
                temp_min: 276.1,
                temp_max: 276.1,
                pressure: 987,
                sea_level: 987,
                grnd_level: 949,
                humidity: 89,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04n",
                },
            ],
            clouds: {
                all: 68,
            },
            wind: {
                speed: 4.9,
                deg: 195,
                gust: 11.65,
            },
            visibility: 10000,
            pop: 0.44,
            sys: {
                pod: "n",
            },
            dt_txt: "2024-01-10 06:00:00",
        },
        {
            dt: 1704877200,
            main: {
                temp: 275.19,
                feels_like: 269.79,
                temp_min: 275.19,
                temp_max: 275.19,
                pressure: 987,
                sea_level: 987,
                grnd_level: 949,
                humidity: 93,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 600,
                    main: "Snow",
                    description: "light snow",
                    icon: "13n",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 7.16,
                deg: 215,
                gust: 11.73,
            },
            visibility: 9669,
            pop: 0.59,
            snow: {
                "3h": 0.26,
            },
            sys: {
                pod: "n",
            },
            dt_txt: "2024-01-10 09:00:00",
        },
        {
            dt: 1704888000,
            main: {
                temp: 273.89,
                feels_like: 268.99,
                temp_min: 273.89,
                temp_max: 273.89,
                pressure: 989,
                sea_level: 989,
                grnd_level: 950,
                humidity: 97,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 600,
                    main: "Snow",
                    description: "light snow",
                    icon: "13n",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 5.31,
                deg: 241,
                gust: 10.73,
            },
            visibility: 28,
            pop: 0.83,
            snow: {
                "3h": 0.94,
            },
            sys: {
                pod: "n",
            },
            dt_txt: "2024-01-10 12:00:00",
        },
        {
            dt: 1704898800,
            main: {
                temp: 273.94,
                feels_like: 268.37,
                temp_min: 273.94,
                temp_max: 273.94,
                pressure: 993,
                sea_level: 993,
                grnd_level: 955,
                humidity: 95,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 600,
                    main: "Snow",
                    description: "light snow",
                    icon: "13d",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 6.72,
                deg: 239,
                gust: 12.69,
            },
            visibility: 3367,
            pop: 0.38,
            snow: {
                "3h": 0.21,
            },
            sys: {
                pod: "d",
            },
            dt_txt: "2024-01-10 15:00:00",
        },
        {
            dt: 1704909600,
            main: {
                temp: 274.09,
                feels_like: 267.63,
                temp_min: 274.09,
                temp_max: 274.09,
                pressure: 996,
                sea_level: 996,
                grnd_level: 958,
                humidity: 90,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 600,
                    main: "Snow",
                    description: "light snow",
                    icon: "13d",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 9.18,
                deg: 264,
                gust: 14.08,
            },
            visibility: 10000,
            pop: 0.38,
            snow: {
                "3h": 0.24,
            },
            sys: {
                pod: "d",
            },
            dt_txt: "2024-01-10 18:00:00",
        },
        {
            dt: 1704920400,
            main: {
                temp: 274.06,
                feels_like: 267.63,
                temp_min: 274.06,
                temp_max: 274.06,
                pressure: 1002,
                sea_level: 1002,
                grnd_level: 963,
                humidity: 90,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 500,
                    main: "Rain",
                    description: "light rain",
                    icon: "10d",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 9.06,
                deg: 263,
                gust: 14,
            },
            visibility: 10000,
            pop: 0.2,
            rain: {
                "3h": 0.11,
            },
            sys: {
                pod: "d",
            },
            dt_txt: "2024-01-10 21:00:00",
        },
        {
            dt: 1704931200,
            main: {
                temp: 273.2,
                feels_like: 267.38,
                temp_min: 273.2,
                temp_max: 273.2,
                pressure: 1006,
                sea_level: 1006,
                grnd_level: 967,
                humidity: 89,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04n",
                },
            ],
            clouds: {
                all: 99,
            },
            wind: {
                speed: 6.82,
                deg: 256,
                gust: 11.49,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "n",
            },
            dt_txt: "2024-01-11 00:00:00",
        },
        {
            dt: 1704942000,
            main: {
                temp: 273.17,
                feels_like: 267.76,
                temp_min: 273.17,
                temp_max: 273.17,
                pressure: 1009,
                sea_level: 1009,
                grnd_level: 970,
                humidity: 89,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04n",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 5.92,
                deg: 245,
                gust: 10.91,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "n",
            },
            dt_txt: "2024-01-11 03:00:00",
        },
        {
            dt: 1704952800,
            main: {
                temp: 273.3,
                feels_like: 268.02,
                temp_min: 273.3,
                temp_max: 273.3,
                pressure: 1010,
                sea_level: 1010,
                grnd_level: 971,
                humidity: 88,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04n",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 5.75,
                deg: 233,
                gust: 10.27,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "n",
            },
            dt_txt: "2024-01-11 06:00:00",
        },
    ],
    city: {
        id: 4517009,
        name: "London",
        coord: {
            lat: 39.8865,
            lon: -83.4483,
        },
        country: "US",
        population: 9904,
        timezone: -18000,
        sunrise: 1704545725,
        sunset: 1704579784,
    },
};

var x = info.list;
console.log(x);

const purpleBG = (context) => {
    const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(85, 0, 255, 0.5)");
    gradient.addColorStop(1, "rgba(85, 0, 255, 0)");
    return gradient;
};
const pinkBG = (context) => {
    const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(255, 0, 212, 0.5)");
    gradient.addColorStop(1, "rgba(255, 0, 212, 0)");
    return gradient;
};

const data = {
    labels: ["mon", "tue", "wed", "thu", "fri"],
    datasets: [
        {
            label: "temperature",
            data: [3, 1, 3, 4, 3],
            fill: true,
            tension: 0.2,
            backgroundColor: purpleBG,
            borderWidth: 3,
            borderColor: "rgba(85, 0, 255)",
            // pointStyle: ["star", "circle", "triangle", img],
            pointRadius: 1,
        },
    ],
};

const options = {
    // elements: {
    //     points: {
    //         pointStyle: [loc, "circle", "triangle", loc],
    //     }
    // }
};

const getColor = (val) => {
    return val > 10 ? "red" : "yellow";
};

function DateTab({ day, temp_min, temp_max, wid }) {
    return (
        <div className="dtab-inactive">
            <h4>{day}</h4>
            <WeatherIcon iconCode={wid} small=" smaller-wicon" />
            <div className="min-max">
                <span className="temp_min">{temp_min}</span>
                <span className="temp_max">{temp_max}</span>
            </div>
        </div>
    );
}

function DateTabs() {
    return (
        <div className="date-tabs">
            <DateTab day={"WED"} temp_min={13.2} temp_max={14} wid={"50n"} />
            <DateTab day={"WED"} temp_min={13.2} temp_max={14} wid={"50d"} />
            <DateTab day={"WED"} temp_min={13.2} temp_max={14} wid={"50d"} />
            <DateTab day={"WED"} temp_min={13.2} temp_max={14} wid={"50d"} />
            <DateTab day={"WED"} temp_min={13.2} temp_max={14} wid={"01d"} />
        </div>
    );
}

function Param({ icon }) {
    return (
        <div className="param-inactive">
            <svg className="graph-icon">
                <use xlinkHref={sprite + `#${icon}`} />
            </svg>
        </div>
    );
}

function LineGraph() {
    return (
        <div className="chart-wrapper-wrapper-wrapper">
            <div className="params">
                <Param icon={"temperature"} />
                <Param icon={"humidity"} />
                <Param icon={"rain"} />
                <Param icon={"wind"} />
            </div>
            <div className="chart-wrapper-wrapper">
                <div className="chart-wrapper">
                    <Line
                        className="line-graph"
                        data={data}
                        style={{ color: "inherit", fontFamily: "Poppins", fontSize: "5rem" }}
                        options={options}
                    />
                </div>
            </div>
        </div>
    );
}

export default function Next5Days() {
    return (
        <div className="next-5-days">
            <DateTabs />
            <LineGraph />
        </div>
    );
}
