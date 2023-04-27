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
  await manager.crearUsuarios(user);
  await manager.crearUsuarios(user2);
  let res = await manager.mostrarUsuarios();
  console.log(res);
};

env();
