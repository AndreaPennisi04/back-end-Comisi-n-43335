const App = require("./app");
const BaseRoute = require("./routes/base.routes.js");
const StudentsRoute = require("./routes/students.routes");
const CoursesRoute = require("./routes/course.routes");
const viewsRoutes = require("./routes/views.routes");

// lo que hacemos dentro de los [] es instanciar la ruta
const app = new App([new BaseRoute(), new StudentsRoute(), new CoursesRoute(), new viewsRoutes()]);

app.listen(); // Lo que estamos haciendo aqui es agreagarle listen para que este escuchando o haya arrancado pq listen es una parte de app.
