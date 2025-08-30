import express from "express";

const app = express();

const port = 3000;

//app.get('/', (req, res) => {
  //  res.status(200).send('Name: Villanueva, Ed Fernando C. | Section: IT4B | Program: BS Information Technology');
//});

//app.get('/hello/:name', (req, res) => {
    //const name = req.params.name;
  //  res.send(`Hello, ${name}`)
//});

// app.get('/:name', (req, res) => {
//     const name = req.params.name;
//     console.log(`Hello, ${name}`)
// });

// app.get('/foo',(req,res) => {
//     console.log(req.query);
// });

// app.get('/:id', (req, res) => {
//     const id = req.params.id;
//     console.log(`Received ID: ${id}`)
// });

app.get('/IT', (req, res) => {
    const body = req.body
});

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
