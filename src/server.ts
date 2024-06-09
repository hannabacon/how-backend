import 'reflect-metadata';

import UserController from "./controllers/user_controllers";
import RecipsController from "./controllers/recips_controller";

async function main(){
  const userController = new UserController();
  const recipsController = new RecipsController();

  const actions = {
    // createUser: async (data: Omit<{ idUser: string; email: string; name: string | null; password: string; image:string; createdAt: Date; updatedAt: Date; }, "idUser">) => userController.create(data),
    // createRecip: async (data: Omit<{ idRecips: string; idUser: string; title: string; preparation: string; image: string; description: string; makings: string; type: string; createdAt: Date; updatedAt: Date; }, "idRecips">) => recipsController.create(data),
    listAllrecips: async () => recipsController.findAll(),
    listAllUsers: async () => userController.findAll(),
  };

  // const userData = {
  //   name: "Paulo Tosi",
  //   email: "paulo@gmail.com",
  //   password: "123456",
  //   image: "https://pbs.twimg.com/profile_images/1796783449535049728/vVFXCNci_400x400.jpg",
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // };

  // const user = await actions.createUser(userData);

  // const userTyped = user as { idUser: string };

  // // Substitua os valores abaixo por valores dinâmicos
  // const recipData = {
  //   idUser: userTyped.idUser,
  //   title: "Torta de frango",
  //   image: "https://bakeandcakegourmet.com.br/uploads/site/receitas/bolo-de-fuba-com-ingrediente-surpresa-ec19h3w5.jpg",
  //   makings: "1 frango, 1 massa de torta, 1 cebola, 1 tomate, 1 pimentão, 1 cenoura, 1 lata de milho, 1 lata de ervilha, 1 lata de azeitona, 1 lata de molho de tomate, 1 lata de creme de leite, 1 lata de água",
  //   description: "Torta de frango facil e rapida de fazer",
  //   preparation: "Cozinhe o frango e desfie, refogue tudo e monte a torta e leve ao forno",
  //   type: "1",
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // };

  // const recip = await actions.createRecip(recipData);

  const recips = await actions.listAllrecips();

}

main().catch(error => {
  console.error('Error:', error);
});