// const list = [
//     "Siivooja",
//     "Hitsaaja",
//     "Bussikuski"
// ]

const construction = [
    {"label": "Hitsaaja"},
    {"label": "Putkimies"},
    {"label": "Sähkömies"}
]
const realEstate = [
    {"label": "Siivooja", "value": "4"}
]

const hospital = [
    {"label": "Kirurgi", "value": "5"},
    {"label": "Psykiatri", "value": "6"}
]

const beauty = [
    {"label": "Kampaaja", "value": "7"},
    {"label": "Parturi", "value": "8"}
]


const options = [
    {"group": "Rakennus", "options": construction},
    {"group": "Kiinteistöala", "options": realEstate},
    {"group": "Terveydenala", "options": hospital},
    {"group": "Kauneusala", "options": beauty}
]



export default options;