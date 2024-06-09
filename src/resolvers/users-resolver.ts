import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { CreateUsersInput } from "../dtos/inputs/create-user-inputs";
import { UsersModel } from "../dtos/models/users-model";
import { RecipsModel } from "../dtos/models/recips-model";
import RecipsController from "../controllers/recips_controller";
import UserController from "../controllers/user_controllers";

@Resolver(() => UsersModel)
export class UsersResolver {
  private userController: UserController;
  private recipsController: RecipsController;

  constructor() {
    this.userController = new UserController();
    this.recipsController = new RecipsController();
  }

  @Query(() => [UsersModel])
  async listAllUsers() {
    return this.userController.findAll();
  }

  @Mutation(() => UsersModel)
  async createUser(@Arg("data") data: CreateUsersInput) {
    return this.userController.create(data);
  }

  @Query(() => [RecipsModel])
  async findRecipsByUserId(@Arg("idUser") idUser: string) {
    return this.recipsController.findAllByUserId(idUser);
  }
}

 