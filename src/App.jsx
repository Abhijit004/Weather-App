import React, { useState } from "react";
import "./App.css";
import "./svg-animations.css";
import sprite from "./assets/iconSprites.svg";
import WeatherIcon from "./WeatherIcon";

// To prevent accidentally leaking env variables to the client, only variables prefixed with VITE_ are exposed to your Vite-processed code.
const API_KEY = import.meta.env.VITE_API_KEY;

const chars = { "Feels-like": "°C", Wind: "m/s", Humidity: "%", Rain: "mm", Sunrise: "AM", Sunset: "PM" };
const countryCode = {
    AF: "Afghanistan",
    AX: "Aland Islands",
    AL: "Albania",
    DZ: "Algeria",
    AS: "American Samoa",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AQ: "Antarctica",
    AG: "Antigua And Barbuda",
    AR: "Argentina",
    AM: "Armenia",
    AW: "Aruba",
    AU: "Australia",
    AT: "Austria",
    AZ: "Azerbaijan",
    BS: "Bahamas",
    BH: "Bahrain",
    BD: "Bangladesh",
    BB: "Barbados",
    BY: "Belarus",
    BE: "Belgium",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermuda",
    BT: "Bhutan",
    BO: "Bolivia",
    BA: "Bosnia And Herzegovina",
    BW: "Botswana",
    BV: "Bouvet Island",
    BR: "Brazil",
    IO: "British Indian Ocean Territory",
    BN: "Brunei Darussalam",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    KH: "Cambodia",
    CM: "Cameroon",
    CA: "Canada",
    CV: "Cape Verde",
    KY: "Cayman Islands",
    CF: "Central African Republic",
    TD: "Chad",
    CL: "Chile",
    CN: "China",
    CX: "Christmas Island",
    CC: "Cocos (Keeling) Islands",
    CO: "Colombia",
    KM: "Comoros",
    CG: "Congo",
    CD: "Congo, Democratic Republic",
    CK: "Cook Islands",
    CR: "Costa Rica",
    CI: 'Cote D"Ivoire',
    HR: "Croatia",
    CU: "Cuba",
    CY: "Cyprus",
    CZ: "Czech Republic",
    DK: "Denmark",
    DJ: "Djibouti",
    DM: "Dominica",
    DO: "Dominican Republic",
    EC: "Ecuador",
    EG: "Egypt",
    SV: "El Salvador",
    GQ: "Equatorial Guinea",
    ER: "Eritrea",
    EE: "Estonia",
    ET: "Ethiopia",
    FK: "Falkland Islands (Malvinas)",
    FO: "Faroe Islands",
    FJ: "Fiji",
    FI: "Finland",
    FR: "France",
    GF: "French Guiana",
    PF: "French Polynesia",
    TF: "French Southern Territories",
    GA: "Gabon",
    GM: "Gambia",
    GE: "Georgia",
    DE: "Germany",
    GH: "Ghana",
    GI: "Gibraltar",
    GR: "Greece",
    GL: "Greenland",
    GD: "Grenada",
    GP: "Guadeloupe",
    GU: "Guam",
    GT: "Guatemala",
    GG: "Guernsey",
    GN: "Guinea",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HT: "Haiti",
    HM: "Heard Island & Mcdonald Islands",
    VA: "Holy See (Vatican City State)",
    HN: "Honduras",
    HK: "Hong Kong",
    HU: "Hungary",
    IS: "Iceland",
    IN: "India",
    ID: "Indonesia",
    IR: "Iran, Islamic Republic Of",
    IQ: "Iraq",
    IE: "Ireland",
    IM: "Isle Of Man",
    IL: "Israel",
    IT: "Italy",
    JM: "Jamaica",
    JP: "Japan",
    JE: "Jersey",
    JO: "Jordan",
    KZ: "Kazakhstan",
    KE: "Kenya",
    KI: "Kiribati",
    KR: "Korea",
    KP: "North Korea",
    KW: "Kuwait",
    KG: "Kyrgyzstan",
    LA: 'Lao People"s Democratic Republic',
    LV: "Latvia",
    LB: "Lebanon",
    LS: "Lesotho",
    LR: "Liberia",
    LY: "Libyan Arab Jamahiriya",
    LI: "Liechtenstein",
    LT: "Lithuania",
    LU: "Luxembourg",
    MO: "Macao",
    MK: "Macedonia",
    MG: "Madagascar",
    MW: "Malawi",
    MY: "Malaysia",
    MV: "Maldives",
    ML: "Mali",
    MT: "Malta",
    MH: "Marshall Islands",
    MQ: "Martinique",
    MR: "Mauritania",
    MU: "Mauritius",
    YT: "Mayotte",
    MX: "Mexico",
    FM: "Micronesia, Federated States Of",
    MD: "Moldova",
    MC: "Monaco",
    MN: "Mongolia",
    ME: "Montenegro",
    MS: "Montserrat",
    MA: "Morocco",
    MZ: "Mozambique",
    MM: "Myanmar",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Netherlands",
    AN: "Netherlands Antilles",
    NC: "New Caledonia",
    NZ: "New Zealand",
    NI: "Nicaragua",
    NE: "Niger",
    NG: "Nigeria",
    NU: "Niue",
    NF: "Norfolk Island",
    MP: "Northern Mariana Islands",
    NO: "Norway",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PS: "Palestinian Territory, Occupied",
    PA: "Panama",
    PG: "Papua New Guinea",
    PY: "Paraguay",
    PE: "Peru",
    PH: "Philippines",
    PN: "Pitcairn",
    PL: "Poland",
    PT: "Portugal",
    PR: "Puerto Rico",
    QA: "Qatar",
    RE: "Reunion",
    RO: "Romania",
    RU: "Russian Federation",
    RW: "Rwanda",
    BL: "Saint Barthelemy",
    SH: "Saint Helena",
    KN: "Saint Kitts And Nevis",
    LC: "Saint Lucia",
    MF: "Saint Martin",
    PM: "Saint Pierre And Miquelon",
    VC: "Saint Vincent And Grenadines",
    WS: "Samoa",
    SM: "San Marino",
    ST: "Sao Tome And Principe",
    SA: "Saudi Arabia",
    SN: "Senegal",
    RS: "Serbia",
    SC: "Seychelles",
    SL: "Sierra Leone",
    SG: "Singapore",
    SK: "Slovakia",
    SI: "Slovenia",
    SB: "Solomon Islands",
    SO: "Somalia",
    ZA: "South Africa",
    GS: "South Georgia And Sandwich Isl.",
    ES: "Spain",
    LK: "Sri Lanka",
    SD: "Sudan",
    SR: "Suriname",
    SJ: "Svalbard And Jan Mayen",
    SZ: "Swaziland",
    SE: "Sweden",
    CH: "Switzerland",
    SY: "Syrian Arab Republic",
    TW: "Taiwan",
    TJ: "Tajikistan",
    TZ: "Tanzania",
    TH: "Thailand",
    TL: "Timor-Leste",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad And Tobago",
    TN: "Tunisia",
    TR: "Turkey",
    TM: "Turkmenistan",
    TC: "Turks And Caicos Islands",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ukraine",
    AE: "United Arab Emirates",
    GB: "United Kingdom",
    US: "United States",
    UM: "United States Outlying Islands",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VU: "Vanuatu",
    VE: "Venezuela",
    VN: "Vietnam",
    VG: "Virgin Islands, British",
    VI: "Virgin Islands, U.S.",
    WF: "Wallis And Futuna",
    EH: "Western Sahara",
    YE: "Yemen",
    ZM: "Zambia",
    ZW: "Zimbabwe",
};

function MainPane({info, isLoading}) {
    var [vanish, load, icon] = ["show-up" ,"", info.weatherIcon];
    if (isLoading) {
        var vanish = "vanish";
        var load = "loading";
        icon = "";
    }
    return (
        <div className={"main-pane "+load}>
            <WeatherIcon iconCode={icon} />
            <span className={"temp-val "+vanish}>{Math.round(info.temperature)}</span>
            <h3 className={vanish}>{info.location}</h3>
            <span className={"descrip "+vanish}>{info.description}</span>
        </div>
    );
}

function Tile({ icon, val, property, toLoad }) {
    var [load, vanish] = ["", " show-up"];
    if (toLoad) {
        load = " loading";
        vanish = " vanish"
    }
    return (
        <div className={"tile"+load}>
            <div className={property}>
                <h4 className={vanish}>{property.replace("-", " ")}</h4>
                <span className={"tile-data"+vanish}>{val}</span>
                <span className={"tile-unit"+vanish}>{chars[property]}</span>
            </div>
            <svg className="tile-icon">
                <use xlinkHref={sprite + `#${icon}`} />
            </svg>
        </div>
    );
}

function SidePane({ info, searchfunc, isLoading }) {
    var [load, vanish] = [false, " show-up"];
    if (isLoading) {
        var vanish = " vanish";
        var load = true;
    }
    const handleKeyDown = (event) => {
        if (event.key == "Enter") {
            searchfunc();
        }
    };
    return (
        <div className="side-pane">
            <div className="input">
                <input
                    type="text"
                    className="city-input"
                    placeholder="Search"
                    onKeyDown={handleKeyDown}
                    spellCheck={false}
                />
                <button className="search-btn" onClick={searchfunc} />
            </div>
            <span className={"country"+vanish}>{info.country}</span>
            <Tile toLoad={load} icon={"temperature"} val={info.temperature} property={"Feels-like"} />
            <Tile toLoad={load} icon={"wind"} val={info.wind} property={"Wind"} />
            <Tile toLoad={load} icon={"humidity"} val={info.humidity} property={"Humidity"} />
            <Tile toLoad={load} icon={"rain"} val={info.rain} property={"Rain"} />
            <Tile toLoad={load} icon={"sunrise"} val={info.sunrise} property={"Sunrise"} />
            <Tile toLoad={load} icon={"sunset"} val={info.sunset} property={"Sunset"} />
        </div>
    );
}

function to12hrTime(timestamp) {
    const time = new Date(timestamp * 1000);
    var [hrs, mins] = [time.getHours(), time.getMinutes()];
    if (mins < 10) mins = `0${mins}`;
    let timestr = `${hrs % 12 || 12}:${mins}`;
    return timestr;
}

function ReactWeather() {
    const [mainpaneInfo, setMainpaneInfo] = useState({
        temperature: 0,
        weatherIcon: "01d",
        location: "Location",
        description: "description",
        country: "country",
    });
    const [sidepaneInfo, setSidepaneInfo] = useState({
        temperature: 0,
        wind: 0,
        humidity: 0,
        rain: 0,
        sunrise: 0,
        sunset: 0,
        country: "Country",
    });

    const [loading, setLoading] = useState(false);

    async function fetchData() {
        const input = document.getElementsByClassName("city-input");
        let city = input[0].value;
        if (city !== "") {
            setLoading(true);
            try {
                let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
                var response = await fetch(URL);
                var currInfo = await response.json();

                // sidepane info update
                let sideInfo = {};
                sideInfo.humidity = currInfo.main.humidity;
                if ("rain" in currInfo) {
                    sideInfo.rain = currInfo.rain["1h"];
                } else {
                    sideInfo.rain = 0;
                }
                sideInfo.temperature = currInfo.main.feels_like;
                sideInfo.wind = currInfo.wind.speed;
                sideInfo.sunrise = to12hrTime(currInfo.sys.sunrise);
                sideInfo.sunset = to12hrTime(currInfo.sys.sunset);
                sideInfo.country = countryCode[currInfo.sys.country];
                
                // mainpane info update
                let mainInfo = {};
                mainInfo.temperature = currInfo.main.temp;
                mainInfo.location = currInfo.name;
                mainInfo.description = currInfo.weather[0].description;
                mainInfo.weatherIcon = currInfo.weather[0].icon;
                setSidepaneInfo(sideInfo);
                setMainpaneInfo(mainInfo);
            } catch {
                setMainpaneInfo({
                    temperature: 0,
                    weatherIcon: " ",
                    location: "What's that?",
                    description: "Does not exist",
                });
                setSidepaneInfo({
                    temperature: 0,
                    wind: 0,
                    humidity: 0,
                    rain: 0,
                    sunrise: 0,
                    sunset: 0,
                    country: "Undefined",
                });
            } finally {
                setLoading(false);
                return;
            }
        }
    }
    return (
        <div className="container">
            <MainPane info={mainpaneInfo} isLoading = {loading} />
            <SidePane searchfunc={fetchData} info={sidepaneInfo} isLoading = {loading}/>
        </div>
    );
}

export default ReactWeather;
