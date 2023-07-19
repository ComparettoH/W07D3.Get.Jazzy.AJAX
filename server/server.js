// declaring a function as 'express' which we a requiring from another module
// that created this code
const express = require('express');

// we are storing the input of express into the constant variable named app
const app = express();
// port is assigning the url to 5000
const PORT = 5000;
// an array is being created with the name 'artistListArray' and contains objects with
// properties of name, born, died (4 objects total)
const artistListArray = [
    {
        name: 'Miles Davis',
        born: 1926,
        died: 1990,
    },
    {
        name: 'Duke Ellington',
        born: 1899,
        died: 1974,
    },
    {
        name: 'John Coltrane',
        born: 1926,
        died: 1987,
    },
    {
        name: 'Louis Daniel Armstrong',
        born: 1901,
        died: 1971,
    },
];
// an array is being created with the name 'songListArray' and contains objects with
// properties of title & artist (4 objects total)
const songListArray = [
    {
        title: 'Take Five',
        artist: 'The Dave Brubeck Quartet',
    },
    {
        title: 'So What',
        artist: 'Miles Davis',
    },
    {
        title: 'Sing Sing Sing',
        artist: 'Benny Goodman',
    },
    {
        title: 'Take the "A" Train',
        artist: 'The Dave Brubeck Quartet',
    },
];

// We're using express to send static code to the browser/homepage
app.use(express.static('server/public'));

// We're using express to create a url path for artist and creating a anonymous function
// that when the server receives a GET request from (browser and/or client) it runs the 
// function to send the response of artist list array 
app.get('/artist', (req, res) => {
    res.send(artistListArray);
});

// TODO - Add GET for songs
app.get('/song', (req, res) => {
    res.send(songListArray);
});

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});