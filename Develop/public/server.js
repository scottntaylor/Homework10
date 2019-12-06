// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
var fs = require("fs");
var express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// require("./routes/apiRoutes")(app);
require("./htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


app.get("/api/notes", function(req, res){
  fs.readFile('./db/db', res, (err) =>{
    if (err) throw err;
  });
})

app.post("/api/notes", function(req, res){
  let note = req.body;
  let noteInfo = fs.appendFile('./db/db', res, (err) =>{
    if (err) throw err;
  });
  let newNote = JSON.parse(noteInfo);
  newNote.push(note);

  fs.writeFile("newNote", newNote,(err) =>{
    if (err) throw err;
console.log("New note added!")
  })
})

app.delete("/api/notes/:id",function(req, res){
  var selectedNote = res.redirect;
  for (var i = 0; i < arr.length; i++) {
    if (selectedNote === arr[i].id) {
      arr.filter(function(id, index, arr){
        return 
      })
    }
  }
})
