const { Router } = require("express");
const studentsModel = require("../model/student.model");

const router = Router();

router.get("/students", async (req, res) => {
  const { page = 1 } = req.query; // extrae el query param page y sino viene el valor por defecto es 1
  const { docs, hasPrevPage, hasNextPage, nextPage, prevPage } = await studentsModel.paginate(
    {},
    { limit: 10, page, lean: true } // limite de cuanto quiero ver por pagina, page: la pagina en la q estoy y lean:se utiliza para controlar si los resultados de la consulta de paginación deben ser devueltos como documentos de Mongoose completos o como objetos JavaScript simples. Cuando lean se establece en true, se indica a Mongoose que los resultados deben ser devueltos como objetos JavaScript en lugar de instancias completas de modelos Mongoose.
  );
  res.render("students", {
    students: docs,
    page,
    hasPrevPage,
    hasNextPage,
    prevPage,
    nextPage,
  });
});

module.exports = router;

/*Los {} vacíos se utilizan para especificar los criterios de búsqueda en la consulta de paginación. El primer argumento de studentsModel.paginate() es el criterio de búsqueda y se utiliza para filtrar los documentos que se devolverán en la paginación.
El primer parámetro ({}) corresponde al criterio de búsqueda y se utiliza para filtrar los documentos. Al proporcionar {} vacíos, se seleccionan todos los documentos de la colección.

El segundo parámetro ({ limit: 10, page, lean: true }) contiene opciones adicionales para la consulta de paginación:

limit: 10 especifica el número máximo de documentos que se devolverán por página.
page es la página específica que se debe devolver.
lean: true es una opción específica de Mongoose que indica que los resultados deben ser devueltos como objetos JavaScript en lugar de instancias completas de modelos Mongoose.
La desestructuración { docs, hasPrevPage, hasNextPage, prevPage, nextPage } se utiliza para extraer las propiedades específicas del resultado de la consulta de paginación. Esto te permite acceder a las propiedades mencionadas directamente, sin necesidad de acceder al objeto completo devuelto por studentsModel.paginate().*/
