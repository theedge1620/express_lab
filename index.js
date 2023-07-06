const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

const fruits = ['Apples','Oranges','Watermelon','Strawberries','Cantaloupes','Plums','Blueberries','Grapes'];

const veggies = ['Potatoes','carrots','Lettuce','Turnips','Kale'];


app.get('/hello', (req, res) => {
    console.log('hello world!');
    res.send('hello world!');
  
});

app.get('/greet/:name', (req, res) => {
    const dispName = req.params.name;

    console.log('Why hello there, ' +dispName+'!');
    res.send('Why hello there,' +dispName+'!');
  
});

app.get('/five', (req, res) => {
    let numsReturn = [1,2,3,4,5];
    console.log(numsReturn);
    res.json(numsReturn);
  
});

app.get('/fruits', (req, res) => {
    const fruitsSend = fruits;
    res.json(fruitsSend);
});

app.get('/fruits/:name', (req, res) => {
        res.send(`The fruit ${req.params.name} was found`);
});

app.get('/veggies', (req, res) => {
    const veggiesSend = veggies;
    res.json(veggiesSend);
});

app.get('/veggies/:name', (req, res) => {
        res.send(`The vegetable ${req.params.name} was found`);
});


app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))

