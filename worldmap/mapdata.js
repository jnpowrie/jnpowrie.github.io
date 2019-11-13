var simplemaps_worldmap_mapdata={
  main_settings: {
    //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    popups: "detect",

	//State defaults
	state_description: "Yet to travel here",
    state_color: "#00B920",
    state_hover_color: "#E90016",
    //state_url: "#countries",
    state_url: '',
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "no",

	//Location defaults
	location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",

	///Label defaults
	label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",

	//Zoom settings
	zoom: "yes",
    back_image: "no",
    arrow_color: "#3B729F",
    arrow_color_border: "#88A4BC",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,

	//Popup settings
	popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",

	//Advanced settings
	div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Link",
    location_image_url: ""
  },
  state_specific: {
    AF: {
      name: "Afghanistan",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    AO: {
      name: "Angola"
    },
    AL: {
      name: "Albania"
    },
    AE: {
      name: "United Arab Emirates"
    },
    AR: {
      name: "Argentina"
    },
    AM: {
      name: "Armenia"
    },
    AU: {
      name: "Australia",
      description: "Born and raised here...",
      color: "#005E10",
      hover_color: "77000B"
    },
    AT: {
      name: "Austria",
			description: "2009",
      color: "#005E10",
      hover_color: "77000B"
    },
    AZ: {
      name: "Azerbaijan"
    },
    BI: {
      name: "Burundi"
    },
    BE: {
      name: "Belgium"
    },
    BJ: {
      name: "Benin"
    },
    BF: {
      name: "Burkina Faso"
    },
    BD: {
      name: "Bangladesh"
    },
    BG: {
      name: "Bulgaria",
			description: "2009",
      color: "#005E10",
      hover_color: "77000B",
    },
    BH: {
      name: "Bahrain"
    },
    BA: {
      name: "Bosnia and Herzegovina"
    },
    BY: {
      name: "Belarus"
    },
    BZ: {
      name: "Belize"
    },
    BO: {
      name: "Bolivia",
			description: "2014",
      color: "#005E10",
      hover_color: "77000B"
    },
    BR: {
      name: "Brazil"
    },
    BN: {
      name: "Brunei Darussalam"
    },
    BT: {
      name: "Bhutan"
    },
    BW: {
      name: "Botswana"
    },
    CF: {
      name: "Central African Republic"
    },
    CA: {
      name: "Canada",
			description: "2002",
      color: "#005E10",
      hover_color: "77000B"
    },
    CH: {
      name: "Switzerland"
    },
    CL: {
      name: "Chile"
    },
    CN: {
      name: "China"
    },
    CI: {
      name: "Côte d'Ivoire"
    },
    CM: {
      name: "Cameroon"
    },
    CD: {
      name: "Democratic Republic of the Congo"
    },
    CG: {
      name: "Republic of Congo"
    },
    CO: {
      name: "Colombia"
    },
    CR: {
      name: "Costa Rica"
    },
    CU: {
      name: "Cuba"
    },
    CZ: {
      name: "Czech Republic",
			description: "2009",
      color: "#005E10",
      hover_color: "77000B"
    },
    DE: {
      name: "Germany",
      description: "2018",
      color: "#005E10",
      hover_color: "77000B"
    },
    DJ: {
      name: "Djibouti"
    },
    DK: {
      name: "Denmark",
      description: "2018",
      color: "#005E10",
      hover_color: "77000B"
    },
    DO: {
      name: "Dominican Republic"
    },
    DZ: {
      name: "Algeria"
    },
    EC: {
      name: "Ecuador"
    },
    EG: {
      name: "Egypt"
    },
    ER: {
      name: "Eritrea"
    },
    EE: {
      name: "Estonia"
    },
    ET: {
      name: "Ethiopia"
    },
    FI: {
      name: "Finland",
      description: "2018",
      color: "#005E10",
      hover_color: "77000B"
    },
    FJ: {
      name: "Fiji",
			description: "2008, 2014",
      color: "#005E10",
      hover_color: "77000B"
    },
    GA: {
      name: "Gabon"
    },
    GB: {
      name: "United Kingdom",
			description: "2009, 2018",
      color: "#005E10",
      hover_color: "77000B"
    },
    GE: {
      name: "Georgia"
    },
    GH: {
      name: "Ghana"
    },
    GN: {
      name: "Guinea"
    },
    GM: {
      name: "The Gambia"
    },
    GW: {
      name: "Guinea-Bissau"
    },
    GQ: {
      name: "Equatorial Guinea"
    },
    GR: {
      name: "Greece"
    },
    GL: {
      name: "Greenland"
    },
    GT: {
      name: "Guatemala"
    },
    GY: {
      name: "Guyana"
    },
    HN: {
      name: "Honduras"
    },
    HR: {
      name: "Croatia",
			description: "2009",
      color: "#005E10",
      hover_color: "77000B"
    },
    HT: {
      name: "Haiti"
    },
    HU: {
      name: "Hungary"
    },
    ID: {
      name: "Indonesia",
			description: "2015-2016, 2017, 2018",
      color: "#005E10",
      hover_color: "77000B"
    },
    IN: {
      name: "India"
    },
    IE: {
      name: "Ireland",
      description: "2018",
      color: "#005E10",
      hover_color: "77000B"
    },
    IR: {
      name: "Iran"
    },
    IQ: {
      name: "Iraq"
    },
    IS: {
      name: "Iceland"
    },
    IL: {
      name: "Israel"
    },
    IT: {
      name: "Italy"
    },
    JM: {
      name: "Jamaica"
    },
    JO: {
      name: "Jordan"
    },
    JP: {
      name: "Japan",
      description: "Airport only",
      color: "#005E10",
      hover_color: "77000B"
    },
    KZ: {
      name: "Kazakhstan"
    },
    KE: {
      name: "Kenya"
    },
    KG: {
      name: "Kyrgyzstan"
    },
    KH: {
      name: "Cambodia",
			description: "2011",
      color: "#005E10",
      hover_color: "77000B"
    },
    KR: {
      name: "Republic of Korea"
    },
    XK: {
      name: "Kosovo"
    },
    KW: {
      name: "Kuwait"
    },
    LA: {
      name: "Lao PDR"
    },
    LB: {
      name: "Lebanon"
    },
    LR: {
      name: "Liberia"
    },
    LY: {
      name: "Libya"
    },
    LK: {
      name: "Sri Lanka"
    },
    LS: {
      name: "Lesotho"
    },
    LT: {
      name: "Lithuania"
    },
    LU: {
      name: "Luxembourg"
    },
    LV: {
      name: "Latvia"
    },
    MA: {
      name: "Morocco"
    },
    MD: {
      name: "Moldova"
    },
    MG: {
      name: "Madagascar",
			description: "2009",
      color: "#005E10",
      hover_color: "77000B"
    },
    MX: {
      name: "Mexico"
    },
    MK: {
      name: "Macedonia"
    },
    ML: {
      name: "Mali"
    },
    MM: {
      name: "Myanmar"
    },
    ME: {
      name: "Montenegro"
    },
    MN: {
      name: "Mongolia"
    },
    MZ: {
      name: "Mozambique"
    },
    MR: {
      name: "Mauritania"
    },
    MW: {
      name: "Malawi"
    },
    MY: {
      name: "Malaysia",
			description: "2010, 2011",
      color: "#005E10",
      hover_color: "77000B"
    },
    NA: {
      name: "Namibia"
    },
    NE: {
      name: "Niger"
    },
    NG: {
      name: "Nigeria"
    },
    NI: {
      name: "Nicaragua"
    },
    NL: {
      name: "Netherlands"
    },
    NO: {
      name: "Norway"
    },
    NP: {
      name: "Nepal"
    },
    NZ: {
      name: "New Zealand",
			description: "2004, 2005, 2011",
      color: "#005E10",
      hover_color: "77000B"
    },
    OM: {
      name: "Oman"
    },
    PK: {
      name: "Pakistan"
    },
    PA: {
      name: "Panama"
    },
    PE: {
      name: "Peru"
    },
    PH: {
      name: "Philippines"
    },
    PG: {
      name: "Papua New Guinea"
    },
    PL: {
      name: "Poland"
    },
    KP: {
      name: "Dem. Rep. Korea"
    },
    PT: {
      name: "Portugal"
    },
    PY: {
      name: "Paraguay"
    },
    PS: {
      name: "Palestine"
    },
    QA: {
      name: "Qatar"
    },
    RO: {
      name: "Romania",
			description: "2009",
      color: "#005E10",
      hover_color: "77000B"
    },
    RU: {
      name: "Russia"
    },
    RW: {
      name: "Rwanda"
    },
    EH: {
      name: "Western Sahara"
    },
    SA: {
      name: "Saudi Arabia"
    },
    SD: {
      name: "Sudan"
    },
    SS: {
      name: "South Sudan"
    },
    SN: {
      name: "Senegal"
    },
    SL: {
      name: "Sierra Leone"
    },
    SV: {
      name: "El Salvador"
    },
    RS: {
      name: "Serbia"
    },
    SR: {
      name: "Suriname"
    },
    SK: {
      name: "Slovakia"
    },
    SI: {
      name: "Slovenia",
      description: "2009",
      color: "#005E10",
      hover_color: "77000B"
    },
    SE: {
      name: "Sweden",
      description: "2018",
      color: "#005E10",
      hover_color: "77000B"
    },
    SZ: {
      name: "Swaziland"
    },
    SY: {
      name: "Syria"
    },
    TD: {
      name: "Chad"
    },
    TG: {
      name: "Togo"
    },
    TH: {
      name: "Thailand",
			description: "2009",
      color: "#005E10",
      hover_color: "77000B"
    },
    TJ: {
      name: "Tajikistan"
    },
    TM: {
      name: "Turkmenistan"
    },
    TL: {
      name: "Timor-Leste"
    },
    TN: {
      name: "Tunisia"
    },
    TR: {
      name: "Turkey"
    },
    TW: {
      name: "Taiwan"
    },
    TZ: {
      name: "Tanzania"
    },
    UG: {
      name: "Uganda"
    },
    UA: {
      name: "Ukraine"
    },
    UY: {
      name: "Uruguay"
    },
    US: {
      name: "United States",
			description: "2002, 2008, 2012-now",
      color: "#005E10",
      hover_color: "77000B"
    },
    UZ: {
      name: "Uzbekistan"
    },
    VE: {
      name: "Venezuela"
    },
    VN: {
      name: "Vietnam"
    },
    VU: {
      name: "Vanuatu"
    },
    YE: {
      name: "Yemen"
    },
    ZA: {
      name: "South Africa",
			description: "2009",
      color: "#005E10",
      hover_color: "77000B"
    },
    ZM: {
      name: "Zambia"
    },
    ZW: {
      name: "Zimbabwe"
    },
    SO: {
      name: "Somalia"
    },
    GF: {
      name: "France"
    },
    FR: {
      name: "France"
    },
    ES: {
      name: "Spain",
      description: "2018",
      color: "#005E10",
      hover_color: "77000B"
    },
    AW: {
      name: "Aruba"
    },
    AI: {
      name: "Anguilla"
    },
    AD: {
      name: "Andorra"
    },
    AG: {
      name: "Antigua and Barbuda"
    },
    BS: {
      name: "Bahamas"
    },
    BM: {
      name: "Bermuda"
    },
    BB: {
      name: "Barbados"
    },
    KM: {
      name: "Comoros"
    },
    CV: {
      name: "Cape Verde"
    },
    KY: {
      name: "Cayman Islands"
    },
    DM: {
      name: "Dominica"
    },
    FK: {
      name: "Falkland Islands"
    },
    FO: {
      name: "Faeroe Islands"
    },
    GD: {
      name: "Grenada"
    },
    HK: {
      name: "Hong Kong",
			description: "2011",
      color: "#005E10",
      hover_color: "77000B"
    },
    KN: {
      name: "Saint Kitts and Nevis"
    },
    LC: {
      name: "Saint Lucia"
    },
    LI: {
      name: "Liechtenstein"
    },
    MF: {
      name: "Saint Martin (French)"
    },
    MV: {
      name: "Maldives"
    },
    MT: {
      name: "Malta"
    },
    MS: {
      name: "Montserrat"
    },
    MU: {
      name: "Mauritius"
    },
    NC: {
      name: "New Caledonia",
			description: "2006, 2014",
      color: "#005E10",
      hover_color: "77000B"
    },
    NR: {
      name: "Nauru"
    },
    PN: {
      name: "Pitcairn Islands"
    },
    PR: {
      name: "Puerto Rico"
    },
    PF: {
      name: "French Polynesia"
    },
    SG: {
      name: "Singapore",
			description: "2010, 2015, 2016",
      color: "#005E10",
      hover_color: "77000B"
    },
    SB: {
      name: "Solomon Islands"
    },
    ST: {
      name: "São Tomé and Principe"
    },
    SX: {
      name: "Saint Martin (Dutch)"
    },
    SC: {
      name: "Seychelles"
    },
    TC: {
      name: "Turks and Caicos Islands"
    },
    TO: {
      name: "Tonga"
    },
    TT: {
      name: "Trinidad and Tobago"
    },
    VC: {
      name: "Saint Vincent and the Grenadines"
    },
    VG: {
      name: "British Virgin Islands"
    },
    VI: {
      name: "United States Virgin Islands"
    },
    CY: {
      name: "Cyprus"
    },
    RE: {
      name: "Reunion (France)"
    },
    YT: {
      name: "Mayotte (France)"
    },
    MQ: {
      name: "Martinique (France)"
    },
    GP: {
      name: "Guadeloupe (France)"
    },
    CW: {
      name: "Curaco (Netherlands)"
    },
    IC: {
      name: "Canary Islands (Spain)"
    }
  },
  locations: {},
  regions: {
    "0": {
      name: "North America",
      states: [
        "MX",
        "CA",
        "US",
        "GL",
        "BM"
      ]
    },
    "1": {
      name: "South America",
      states: [
        "EC",
        "AR",
        "VE",
        "BR",
        "CO",
        "BO",
        "PE",
        "BZ",
        "CL",
        "CR",
        "CU",
        "DO",
        "SV",
        "GT",
        "GY",
        "GF",
        "HN",
        "NI",
        "PA",
        "PY",
        "PR",
        "SR",
        "UY",
        "JM",
        "HT",
        "BS",
        "FK",
        "AI",
        "AG",
        "AW",
        "BB",
        "VG",
        "KY",
        "DM",
        "MQ",
        "LC",
        "VC",
        "GD",
        "GP",
        "MS",
        "TC",
        "SX",
        "MF",
        "KN",
        "CW"
      ]
    },
    "2": {
      name: "Europe",
      states: [
        "IT",
        "NL",
        "NO",
        "DK",
        "IE",
        "GB",
        "RO",
        "DE",
        "FR",
        "AL",
        "AM",
        "AT",
        "BY",
        "BE",
        "LU",
        "BG",
        "CZ",
        "EE",
        "GE",
        "GR",
        "HU",
        "IS",
        "LV",
        "LT",
        "MD",
        "PL",
        "PT",
        "RS",
        "SI",
        "HR",
        "BA",
        "ME",
        "MK",
        "SK",
        "ES",
        "FI",
        "SE",
        "CH",
        "TR",
        "CY",
        "UA",
        "XK",
        "MT",
        "FO"
      ]
    },
    "3": {
      name: "Africa and the Middle East",
      states: [
        "QA",
        "BH",
        "SA",
        "AE",
        "SY",
        "OM",
        "KW",
        "PK",
        "AZ",
        "AF",
        "IR",
        "IQ",
        "IL",
        "PS",
        "JO",
        "LB",
        "YE",
        "TJ",
        "TM",
        "UZ",
        "KG",
        "NE",
        "AO",
        "EG",
        "TN",
        "GA",
        "DZ",
        "LY",
        "CG",
        "GQ",
        "BJ",
        "BW",
        "BF",
        "BI",
        "CM",
        "CF",
        "TD",
        "CI",
        "CD",
        "DJ",
        "ET",
        "GM",
        "GH",
        "GN",
        "GW",
        "KE",
        "LS",
        "LR",
        "MG",
        "MW",
        "ML",
        "MA",
        "MR",
        "MZ",
        "NA",
        "NG",
        "ER",
        "RW",
        "SN",
        "SL",
        "SO",
        "ZA",
        "SD",
        "SS",
        "SZ",
        "TZ",
        "TG",
        "UG",
        "EH",
        "ZM",
        "ZW",
        "RE",
        "KM",
        "SC",
        "MU",
        "CV",
        "IC",
        "ST",
        "YT"
      ]
    },
    "4": {
      name: "South Asia",
      states: [
        "TW",
        "IN",
        "AU",
        "MY",
        "NP",
        "NZ",
        "TH",
        "BN",
        "JP",
        "VN",
        "LK",
        "SB",
        "FJ",
        "BD",
        "BT",
        "KH",
        "LA",
        "MM",
        "KP",
        "PG",
        "PH",
        "KR",
        "ID",
        "CN",
        "MV",
        "NC",
        "VU",
        "NR"
      ]
    },
    "5": {
      name: "North Asia",
      states: [
        "MN",
        "RU",
        "KZ"
      ]
    }
  }
};
