import UserController from "./controllers/user_controllers";
import RecipsController from "./controllers/recips_controller";

async function main(){
  const userController = new UserController();
  const recipsController = new RecipsController();

  // const user = await userController.create({
  //   name: "Sandra de Mello",
  //   email: "sandrinhaschetinger@gmail.com",
  //   password: "123456",
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // });

  // const userTyped = user as { idUser: string };


  // const recip = await recipsController.create({
  //   idUser: userTyped.idUser,
  //   title: "Bolo de fuba",
  //   makings: "2 xicaras de fuba, 1 xicara de leite, 1 xicara de oleo, 1 xicara de açucar, 3 ovos, 1 colher de fermento",
  //   description: "Misture tudo e asse em forno preaquecido a 180 graus por 40 minutos",
  //   type: "1",
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // });

  const recips = await recipsController.findAll();

  console.log(recips);
}

main()