import ManagerUsuarios from "./managers/ManagersUser.js";

const manager = new ManagerUsuarios();

const env = async () => {
  let user = {
    nombre: "Andrea",
    apellido: "Pennisi",
    marca: "Kia",
  };

  let user2 = {
    nombre: "Diego",
    apellido: "Diquattro",
    marca: "Lamborghini",
  };
  let result = await manager.crearUsuarios(user, user2);
  console.log(result);
};

env();
