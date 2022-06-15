const { response, request } = require("express");
const express = require("express");
const app = express();
let notes = [
  {
    id: 1,
    content: "Graph Theory",
    date: "2022-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Laplace",
    date: "2022-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "Polynomials",
    date: "2022-05-30T19:20:14.298Z",
    important: true,
  },
];

app.get("/", (request, response) => {
  response.send("<h1>He He</h1>");
});

app.get("/api/notes", (request, response) => {
  response.json(notes);
});

app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find((note) => {
    console.log(note.id, typeof note.id, id, typeof id, note.id === id);
    return note.id === id;

    if (note) {
      response.json(note);
    } else {
      response.status(404).end();
    }
  });
  console.log(note);
  response.json(note);
});


app.delete('/api/notes/:id',(request,response)=>{
  const id=Number(request.params.id)
  notes=notes.filter(notes=>note.id !==id)

  response.status(204).end()
})
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
