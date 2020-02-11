var express = require('express');
var path = require('path');

//leaving in the bodyParser in case we ever send up form data and need to get data out of form
var bodyParser = require('body-parser');


var app = express();

// view engine setup
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.dataArray = [];
// just one "site" with 2 pages, / and about

// use res.render to load up an ejs view file
// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});



// upLoadData page 
// sending a get with 1 param
// http://localhost:3000/uploadData?id=2&date=1941
app.get('/uploadData', function(req, res) {
    let id = req.param('id');
    let date = req.param('date');
    if(id != null){
        let aMovie = {
            id: id,
            date: date
        }
    app.dataArray.push(aMovie);
    }
    res.render('pages/uploadData', { 
        dataArray: app.dataArray
     });
  });



// error page 
app.get('/error', function(req, res) {
    // should get real data from some real operation, but instead ...
    let message = "Oh no, something happened!";
    let error ={
        status: "Yo've already logged in.",
        stack: "Let's start your adventure in Facebook."
    };
    res.render('pages/error', {  // pass the data to the page renderer
        message: message,
        error: error
    });
});

// showData page 
app.get('/showData', function(req, res) {
    res.render('pages/showData',
    {dataArray: app.dataArray}); 
    
});

// searchData page 
app.get('/searchData', function(req, res) {
    let id = req.param('id');
    let date = req.param('date');
    if(id != null){
        let aMovie = {
            id: id,
            date: date
        }
        for(let i =0; i < app.dataArray.length; i++){
            if(app.dataArray[i].id == aMovie.id){
                if(app.dataArray[i].date == aMovie.date){
                app.dataArray.splice(i,1);
                }
            }
        }
    //app.dataArray.pop(aMovie);
    }
    res.render('pages/searchData',{
        dataArray: app.dataArray
    });
});


//app.listen(443);  // not setting port number in www.bin, simple to do here
//console.log('443 is the magic port');

module.exports = app;
