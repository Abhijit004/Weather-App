import React, { useState, useEffect } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import WeatherIcon from "./WeatherIcon";
import sprite from "./assets/iconSprites.svg";

function getDayName(dateString) {
    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    return daysOfWeek[dayOfWeek];
}

// Some constants regarding current day
const today = new Date();
const currDayname = today.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
var dayList = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
let i = dayList.indexOf(currDayname);
dayList = dayList.slice(i).concat(dayList.slice(0, i));

const purpleBG = (context) => {
    const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(1, "rgba(85, 0, 255, 0.5)");
    gradient.addColorStop(0, "rgba(185, 0, 255, 0.5)");
    return gradient;
};

function plotThisNow(obj, param) {
    switch (param) {
        case "temperature":
            param += " (°C)";
            break;
        case "wind":
            param += " (m/s)";
            break;
        case "humidity":
            param += " (%)";
            break;
        case "rain":
            param += " (mm)";
            break;
    }
    const data = {
        labels: Object.keys(obj),
        datasets: [
            {
                label: param,
                data: Object.values(obj),
                fill: true,
                tension: 0.2,
                backgroundColor: purpleBG,
                borderWidth: 3,
                borderColor: "hsl(280, 97.60%, 45%)",
                pointRadius: 1,
            },
        ],
    };

    return data;
}

Chart.defaults.font.size = 16;
const options = {
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            mode: "index",
            intersect: false,
        },
    },
    hover: {
        mode: "nearest",
        intersect: false,
    },
};

function DateTab({ day, temp_min, temp_max, wid, changeGraphData, isactive, load }) {
    return (
        <button
            className={`dtab-${isactive ? "" : "in"}active ${load ? "vanish" : "show-up"}`}
            onClick={() => changeGraphData(day)}
        >
            <h4>{day === currDayname ? "Today" : day}</h4>
            <WeatherIcon iconCode={wid} small=" smaller-wicon" />
            <div className="min-max">
                <span className="temp_min">{temp_min}</span>
                <span className="temp_max">{temp_max}</span>
            </div>
        </button>
    );
}

function DateTabs({ dateTabsInfo, changeGraphData, active, loading }) {
    return (
        <div className={"date-tabs " + (loading ? "loading" : "")}>
            {dateTabsInfo.map((data) => (
                <DateTab
                    key={data.day}
                    day={data.day}
                    temp_min={data.temp_min}
                    temp_max={data.temp_max}
                    wid={data.icon}
                    changeGraphData={changeGraphData}
                    isactive={data.day === active}
                    load={loading}
                />
            ))}
        </div>
    );
}

function Param({ isactive, icon, plotGraph }) {
    return (
        <button className={`param-${isactive ? "" : "in"}active`} onClick={() => plotGraph(icon)}>
            <svg className="graph-icon">
                <use xlinkHref={sprite + `#${icon}`} />
            </svg>
        </button>
    );
}

function LineGraph({ lineGraphInfo, loading }) {
    const [parameter, setparameter] = useState("temperature");
    const [active, setactive] = useState("temperature");

    function plotGraph(newParameter) {
        setparameter(newParameter);
        setactive(newParameter);
    }

    var load = loading ? "vanish" : "show-up";

    return (
        <div className={"chart-wrapper-wrapper-wrapper " + (loading ? "loading" : "")}>
            <div className={"params " + load}>
                <Param isactive={active === "temperature"} plotGraph={plotGraph} icon={"temperature"} />
                <Param isactive={active === "humidity"} plotGraph={plotGraph} icon={"humidity"} />
                <Param isactive={active === "rain"} plotGraph={plotGraph} icon={"rain"} />
                <Param isactive={active === "wind"} plotGraph={plotGraph} icon={"wind"} />
            </div>
            <div className={"chart-wrapper-wrapper " + load}>
                <div className="chart-wrapper">
                    <Line
                        className="line-graph"
                        data={plotThisNow(lineGraphInfo[parameter], parameter)}
                        style={{ color: "inherit", fontFamily: "Poppins", fontSize: "5rem" }}
                        options={options}
                    />
                </div>
            </div>
        </div>
    );
}

function getDateTabsInfo(info) {
    if (info === null)
        return dayList.map((currday) => {
            return { day: currday, icon: "01d" };
        });
    var res = [];
    var newd = {};
    for (let data of info) {
        let dataday = getDayName(data.dt_txt.slice(0, 10));
        if (res.length == 0 || dataday != res[res.length - 1].day) {
            newd.day = dataday;
            newd.icon = data.weather[0].icon;
            newd.temp_min = data.main.temp_min;
            newd.temp_max = data.main.temp_max;
            res.push({ ...newd });
        } else if (dataday === res[res.length - 1].day && data.dt_txt.includes("09:00:00")) {
            res[res.length - 1].icon = data.weather[0].icon;
            res[res.length - 1].temp_min = data.main.temp_min;
            res[res.length - 1].temp_max = data.main.temp_max;
        }
    }
    console.log(res);
    return res;
}

function getLineGraphInfo(info, keys) {
    var res = {};
    if (info === null) {
        for (let day of dayList) {
            res[day] = { temperature: {}, humidity: {}, rain: {}, wind: {} };
        }
        return res;
    }

    for (let key of keys) {
        res[key] = { temperature: {}, humidity: {}, rain: {}, wind: {} };
        for (let data of info) {
            if (getDayName(data.dt_txt.slice(0, 10)) == key) {
                let x = data.dt_txt.slice(11, 16);
                res[key].temperature[x] = data.main.temp;
                res[key].humidity[x] = data.main.humidity;
                res[key].rain[x] = "rain" in data ? data.rain["1h"] : 0;
                res[key].wind[x] = data.wind.speed;
            }
        }
    }
    return res;
}

export default function Next5Days({ info, isLoading }) {
    var keys = getDateTabsInfo(info);
    var mainDict = getLineGraphInfo(
        info,
        keys.map((data) => data.day)
    );
    const [currday, setcurrday] = useState(currDayname);

    function changeGraphData(newDay) {
        // changes the day info
        setcurrday(newDay);
    }

    return (
        <div className="next-5-days">
            <DateTabs loading={isLoading} dateTabsInfo={keys} changeGraphData={changeGraphData} active={currday} />
            <LineGraph loading={isLoading} lineGraphInfo={mainDict[currday]} />
        </div>
    );
}
