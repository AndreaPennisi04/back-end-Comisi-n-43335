const { Router } = require("express");

const studentsModel = require("./model/student.model");
const stundentsData = require("./data/students");

const router = Router();

router.get("/insertion", async (req, res) => {
  try {
    let result = await studentsModel.insertMany(stundentsData); //aca lo que hago es: dela rchivo donde quiero solicitar toda la info requerida que a su vez esta enlazada con la base de datos que de encuentra en el archivo data carpeta studentsData

    return res.json({
      message: `bulk insertion successfully`, // ponemos bulk pq son para insersiones basicas
      students: result,
    });
  } catch (error) {
    console.log("🚀 ~ file: students.routes.js:17 ~ router.get ~ error:", error);
  }
});

router.get("/groups", async (req, res) => {
  try {
    // Quiero agrupar calificaciones de mejor a peor
    const studentsByGrade = await studentsModel.aggregate([
      {
        $group: { _id: "$grade", students: { $push: "$$ROOT" } }, // esto sirve para agrupar las notas de los estudiantes y pushearlas
      },
      {
        $sort: { _id: -1 }, // esto sirve para ordenarlas segun mi criterio asc y desc o al reves
      },
    ]);
    // esta es unsa solucion alternativa de la primero lo unico que hago es cambiar el orden de como quiero hacer la busqueda
    const studentsByGradeV2 = await studentsModel.aggregate([
      { $sort: { grade: -1 } },
      { $group: { _id: "$grade", students: { $push: "$$ROOT" } } },
    ]);

    // AGRUPAR ESTUDIANTES POR GRUPO
    const studentsInGroups = await studentsModel.aggregate([
      { $group: { _id: "$group", students: { $push: "$$ROOT" } } },
    ]);

    // con el return devuelvo el valor que estoy buscando en un res.json
    return res.json({
      message: `queries de agrupacion`,
      studentsByGrade,
      studentsByGradeV2,
      studentsInGroups,
    });
  } catch (error) {
    console.log("🚀 ~ file: students.routes.js:33 ~ router.get ~ error:", error);
  }
});

// Para calcular el promedio
router.get("/promedio/gruoup", async (req, res) => {
  try {
    const group = req.query.group ?? "1B";
    //PROMEDIO ESTUDIANTES 1B
    const studentAverage1B = await studentsModel.aggregate([
      { $match: { group: `${group}` } }, // el match es para filtrar, reduce cosas
      { $group: { _id: "1B", promedio: { $avg: "$grade" } } }, // avg es para dividir
    ]);

    // PROMEDIO DE ESTUDIANTES 1A
    const studentsAverage1A = await studentsModel.aggregate([
      { $match: { group: "1A" } },
      { $group: { _id: "1A", promedio: { $avg: "$grade" } } },
    ]);

    return res.json({
      message: `average for students in class 1A and 1B`,
      studentAverage1B,
      studentsAverage1A,
    });
  } catch (error) {
    console.log("🚀 ~ file: students.routes.js:65 ~ router.get ~ error:", error);
  }
});

// Para calcular promedios en general
router.get("/promedio/general", async (req, res) => {
  try {
    //PROMEDIO GENERAL DE ESTUDIANTES.
    const generalAverage = await studentsModel.aggregate([
      { $group: { _id: "Students", promedio: { $avg: "$grade" } } }, // aca pongo students para tener un contexto. "$grade" viene de students.model donde el campo se llama grade. Puede ser gender, email, dependiendo que es lo que quiero ver o campo que buscar
    ]);

    return res.json({
      message: `general average`,
      generalAverage,
    });
  } catch (error) {
    console.log("🚀 ~ file: students.routes.js:87 ~ router.get ~ error:", error);
  }
});

// Para calificaciones en base a genero
router.get("/promedio/calificaciones/:gender", async (req, res) => {
  try {
    const { gender } = req.params; //pq es params aca y no query? pq ya en la linea donde establezco la ruta "/promedio/calificaciones/:gender" a gender lo tengo con los : punto adelante y eso simplemente me idica que es paramas y no query(es un parametro y no una cosulta en si)
    // PROMEDIO SOLO HOMBRES
    const maleStudentAverage = await studentsModel.aggregate([
      { $match: { gender: "Male" } },
      {
        $group: {
          _id: "Hombres",
          promedio: { $avg: "$grade" },
        },
      },
    ]);

    //PROMEDIO MUJERES
    const femaleStudentAverage = await studentsModel.aggregate([
      { $match: { gender: "Female" } },
      { $group: { _id: "Mujeres", promedio: { $avg: "$grade" } } },
    ]);

    const genderStunderAverage = await studentsModel.aggregate([
      { $match: { gender: `${gender}` } },
      {
        $group: {
          _id: `${gender}`,
          promedio: { $avg: "$grade" },
          cantidad: { $sum: "$grade" },
          cantidadEst: { $sum: 1 },
        },
      },
    ]);

    return res.json({
      message: `students average for male and female`,
      maleStudentAverage,
      femaleStudentAverage,
      genderStunderAverage,
    });
  } catch (error) {
    console.log("🚀 ~ file: students.routes.js:142 ~ router.get ~ error:", error);
  }
});

module.exports = router;

/*NOTES: Se utiliza el const con un require en vez de import pq no estamos usando el type: modules en el package.json y funciona de la misma manera. Lo unico
que cambia es la forma de como llamar a los archivos que se importan. Cualquiera de las dos formas son validas  */
