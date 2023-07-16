const user = require("./assets/Users");
const animals = require("./assets/Animals");
const sports = require("./assets/Sports");

const express = require("express");
const { default: axios } = require("axios");
const app = express();
const port = 3000;

app.get("/users/get" , async (req,res) => {
    res.send(await user.getUsers())
});

app.get("/animals/get" ,async (req,res) => {
    res.send(await animals.getAnimals())
});

app.get("/sports/get" , async (req,res) => {
    res.send(await sports.getSports())
});

app.listen(port , () => {
    console.log(`Example app listening on port ${port}`);
})

//sports.getSports();

//user.getUsers();

//animals.getAnimals();


