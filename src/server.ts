import 'reflect-metadata';

import UserController from "./controllers/user_controllers";
import RecipsController from "./controllers/recips_controller";

async function main(){
  const userController = new UserController();
  const recipsController = new RecipsController();

  const actions = {
    createUser: async (data: Omit<{ idUser: string; email: string; name: string | null; password: string; createdAt: Date; updatedAt: Date; }, "idUser">) => userController.create(data),
    createRecip: async (data: Omit<{ idRecips: string; idUser: string; title: string; description: string; makings: string; type: string; createdAt: Date; updatedAt: Date; }, "idRecips">) => recipsController.create(data),
    findAllRecips: async () => recipsController.findAll(),
    findAllRecipsByUserId: async (userId: string) => recipsController.findAllByUserId(userId),
  };

  // Substitua os valores abaixo por valores dinâmicos
  // const userData = {
  //   name: "Nome do usuário",
  //   email: "email@exemplo.com",
  //   password: "senha",
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // };

  // const user = await actions.createUser(userData);

  // const userTyped = user as { idUser: string };

  // // Substitua os valores abaixo por valores dinâmicos
  // const recipData = {
  //   idUser: userTyped.idUser,
  //   title: "Título da receita",
  //   makings: "Ingredientes da receita",
  //   description: "Descrição da receita",
  //   type: "Tipo da receita",
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // };

  // const recip = await actions.createRecip(recipData);

//   const recips = await actions.findAllRecips();

//   const recipsByUserId = await actions.findAllRecipsByUserId(userTyped.idUser);

}

main().catch(error => {
  console.error('Error:', error);
});