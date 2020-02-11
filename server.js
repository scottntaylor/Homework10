
var fs = require("fs");
var express = require("express");
var path = require("path");
var notes = require("./Develop/db/db.json");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "notes.html"))
});


app.get("/api/notes", (req, res) => {

   
    return res.json(notes);

});

app.post("/api/notes", (req, res) => {
    let newNote = req.body;
    assignID(newNote);
    reWriteNotes(newNote);
    
})

app.delete("/api/notes/:id", (req, res) => {
    deleteNote(req.params.id);
});



function assignID(newNote) {
    let readNotes = notes;
    newNote.id = readNotes.length + 1;
  
}

function reWriteNotes(note) {
    let parsedNotes = notes;
    parsedNotes.push(note);
    writeNote(parsedNotes);
};

function deleteNote(id) {
    let readNotes = notes;
    let filteredNotes = readNotes.filter(note => note.id !== parseInt(id));
  
    writeNote(filteredNotes);

}

function writeNote(noteArray) {
    fs.writeFile("./Develop/db/db.json", JSON.stringify(noteArray), "utf8", (err, res) => {
        if (err) throw err;

    });
}