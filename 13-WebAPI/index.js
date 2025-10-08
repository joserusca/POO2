var express = require("express");
var app = express();
var port = 3000;

var datos = [
  { id: 1, nombre: "Juan", apellido: "Garcia", edad: 30 },
  { id: 2, nombre: "Pedro", apellido: "Fernandez", edad: 20 },
  { id: 10, nombre: "Ana", apellido: "Estevez", edad: 43 },
  { id: 15, nombre: "Juan Carlos", apellido: "Bruno", edad: 65 },
];

app.get("/getAll", (req, res) => {
  res.send(datos);
});

app.get("/getPerson", (req, res) => {
  res.send(datos.filter((item) => item.id === parseInt(req.query.id)));
});

app.get("/getPerson/:id", (req, res) => {
  res.send(
    datos.filter((item) => parseInt(item.id) === parseInt(req.params.id))
  );
});

app.get("/getPerson/:desde/:hasta", (req, res) => {
  res.send(
    datos.filter(
      (item) =>
        item.id >= parseInt(req.params.desde) &&
        item.id <= parseInt(req.params.hasta)
    )
  );
});

app.get("/getPersonByHeader", (req, res) => {
  console.log(req.headers.id);
  const id = parseInt(req.headers.id);
  res.send(datos.find((item) => item.id === id));
});

app.post("/setPerson", (req, res) => {
  datos.push({
    nombre: req.headers.name,
    apellido: req.headers.surname,
    edad: req.headers.age,
  });
  res.statusCode = 201;
  res.statusMessage = "OK";
  res.send();
});

app.post("/processAll", (req, res) => {
  var total = 0;
  datos.forEach((item) => (total = total + item.edad));
  // datos = [];
  res.send(JSON.stringify(total));
});

app.listen(port, () => {
  console.log("Server Running in port ", port);
});
