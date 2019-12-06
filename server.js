// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
var fs = require("fs");
var express = require("express");
var path = require("path");
var notes = require("./Develop/db/db.json");

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

app.use(express.static(path.join(__dirname, "./public")));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// require("./routes/apiRoutes")(app);
require("./public/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});


app.get("/api/notes", function (req, res) {
  // fs.readFile('./db/db.json', res, (err) => {
  //   if (err) throw err;
    return res.json(notes);
  
})

app.post("/api/notes", function (req, res) {
  let note = req.body;
  // let noteInfo = fs.appendFile('./db/db.json', res, (err) => {
  //   if (err) throw err;
  // });
  // let newNote = JSON.parse(noteInfo);
  // newNote.push(note);
  addNote(note)

  // fs.writeFile("newNote", newNote, (err) => {
  //   if (err) throw err;
  //   console.log("New note added!")
  // })
})

app.delete("/api/notes/:id", function (req, res) {
  var selectedNote = res.redirect;
  for (var i = 0; i < arr.length; i++) {
    if (selectedNote === arr[i].id) {
      arr.filter(function (id, index, arr) {
        return
      })
    }
  }
})

function addNote(note) {
  let parsedNotes = notes;
  parsedNotes.push(note);
  fs.writeFile('./db/db.json', JSON.stringify(parsedNotes), "utf8", (err, res) => {
    if (err) throw err;
  }

  )}
