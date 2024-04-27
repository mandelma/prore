// const list = [
//     "Siivooja",
//     "Hitsaaja",
//     "Bussikuski"
// ]

const construction = [
    {"label": "Hitsaaja", "value": "1"},
    {"label": "Putkimies", "value": "2"},
    {"label": "Sähkömies", "value": "3"}
]
const realEstate = [
    {"label": "Siivooja", "value": "4"}
]

const hospital = [
    {"label": "Kirurgi", "value": "5"},
    {"label": "Psykiatri", value: "6"}
]

// const options = [
//     {"group":"Fruits","options":[{"label":"Apple","value":"f-1"},{"label":"Banana","value":"f-2"},{"label":"Orange","value":"f-3"}]},
//     {"label":"Chocolate","value":"m-1"},
//     {"label":"Cake","value":"m-2"},
//     {"group": "Construction", "options": construction},
//     {"group":"Vegetables","options":[{"label":"Cabbage","value":"v-1"},{"label":"Tomato","value":"v-2"}]},
//     {"label":"Puddin","value":"m-3"}
// ]

const options = [
    {"group": "Rakennus", "options": construction},
    {"group": "Kiinteistöala", "options": realEstate},
    {"group": "Terveydenala", "options": hospital}
]



export default options;