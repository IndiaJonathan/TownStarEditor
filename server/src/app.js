import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();
const dataPath = path.resolve(__dirname + '/town-star-data');

//import craftsData from '../town-star-data/CraftsData.json';
//import objectsData from '../town-star-data/ObjectsData.json'
//import unitsData from '../town-star-data/UnitsData.json'

const app = express();
const parsedJson = JSON.parse(fs.readFileSync(path.resolve(dataPath, 'CraftsData.json')));

app.use(morgan('combined'))  //log generator
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req, res) => {
    res.send({
        message: 'Heyo Gala!'
    })
});

app.get('/parse', (req, res) => {
    res.send({
        message: parsedJson
    })
});


app.listen(8081);