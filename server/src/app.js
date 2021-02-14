import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
app.use(morgan('combined'))  //log generator
app.use(bodyParser.json());
app.use(cors());


app.get('/status', (req, res) => {
    res.send({
        message: 'Heyo Gala!'
    })
});

app.listen(8081);