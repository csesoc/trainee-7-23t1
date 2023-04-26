// Import necessary modules
const express = require('express');
const cors = require('cors');

// Create an instance of Express app
const app = express();
app.use(cors());
app.use(express.json())

// const data = {
//     "pets": {
//         alive: Boolean,
//         name: String,
//         species_name: String,
//         description:, 
//         fact:,
//         limbs: Range(0-3)

//     },
//     "species" :  [{
//         name: String,
//         collected: Bool,
//         images: String[],
//     }]
// };
let data = {
    "pets": [],
    "species": [{
        name: "salina",
        collected: false,
        images: ["https://cdn.discordapp.com/attachments/1082563227851956234/1100655896239018064/salina.png", "https://cdn.discordapp.com/attachments/1082563227851956234/1100655896239018064/salina.png", "https://cdn.discordapp.com/attachments/1082563227851956234/1100655896239018064/salina.png", "https://cdn.discordapp.com/attachments/1082563227851956234/1100655896239018064/salina.png"]
    }]
}


// Define a route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.post('/spawn_pet', (req, res) => {
    species_num = data.species.length
    new_pet_index = Math.floor(Math.random() * (species_num))
    data.species[new_pet_index].collected = true
    new_pet = {
        alive: true,
        name: req.body.name,
        species_name: data.species[new_pet_index].name,
        description: "",
        fact: "",
        limbs: 4
    }
    data.pets.push(new_pet)
    return res.send(data);
});

app.get("/getData", (req, res) => {
    return res.json(data);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});