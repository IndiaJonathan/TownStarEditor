import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import chokidar from 'chokidar'

const __dirname = path.resolve();
const dataPath = path.resolve(__dirname + '/town-star-data');
var editPath = path.resolve(__dirname, 'EditedJson');


//import craftsData from '../town-star-data/CraftsData.json';
//import objectsData from '../town-star-data/ObjectsData.json'
//import unitsData from '../town-star-data/UnitsData.json'

const app = express();
const parsedJson = JSON.parse(fs.readFileSync(path.resolve(dataPath, 'CraftsData.json')));

let watcherStarted = false;

//passsing directoryPath and callback function
let files;
refreshFiles();

app.use(morgan('combined'))  //log generator
app.use(bodyParser.json());
app.use(cors());


// Initialize watcher for any external file changes (should be an edge case)
const watcher = chokidar.watch(editPath, { persistent: true });
 
// Add event listeners.
watcher
  .on('add', path => {
      if (watcherStarted){
        refreshFiles()
        console.log(`File ${path} has been added`)          
      }
    })
  .on('unlink', path => {
      refreshFiles()
      console.log(`File ${path} has been removed`)
    })
  .on('ready', () => {
    watcherStarted = true
      console.log('Initial scan complete. Ready for changes')
    });





app.get('/status', (req, res) => {
    res.send({
        message: 'Heyo Gala!'
    })
});

app.get('/parse', (req, res) => {
    if (req.query.filename != null){
        let customFile = JSON.parse(fs.readFileSync(path.resolve(editPath, req.query.filename)));
        res.send({
            message: customFile
        })
    } else{
        res.send({
            message: parsedJson
        })
    }
});

app.get('/files', (req, res) => {
    res.send({
        message: files
    })
});

app.post('/save', function(req, res){
    console.log(req.body);
    console.log(req.headers.filename);
    let fileName = req.headers.filename;
    if (!fileName.endsWith(".json")){
        fileName = fileName+ '.json';
    }
    fs.writeFile("EditedJson/" + fileName, JSON.stringify(req.body.message,null,2), (err) => {
        if (err){
            console.log(err)
            res.send("Error Writing File!");
        } else{
            if (!files.includes(fileName)){
                files.push(fileName)
            }
            console.log("File written successfully");
            res.send("File written successfully");
        }
    })
 });


app.listen(8081);

function refreshFiles(){
    files = fs.readdirSync(editPath);
    //listing all files using forEach
    files.forEach(function (file) {
        console.log(file); 
    });
}