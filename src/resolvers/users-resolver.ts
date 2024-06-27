import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { CreateUsersInput } from "../dtos/inputs/create-user-inputs";
import { UsersModel } from "../dtos/models/users-model";
import { RecipsModel } from "../dtos/models/recips-model";
import { UpdateUserInput } from "../dtos/inputs/update-user-inputs";

import RecipsController from "../controllers/recips_controller";
import UsersController from "../controllers/user_controller";
import { UsersUpdateModel } from "../dtos/models/users-model-update";

@Resolver(() => UsersModel)
export class UsersResolver {
  private usersController: UsersController;
  private recipsController: RecipsController;

  constructor() {
    this.usersController = new UsersController();
    this.recipsController = new RecipsController();
  }

  @Query(() => [UsersModel])
  async listAllUsers() {
    return this.usersController.findAll();
  }

  @Mutation(() => UsersModel)
  async createUser(@Arg("data") data: CreateUsersInput) {
    return this.usersController.createUser(data);
  }

  @Query(() => [RecipsModel])
  async findRecipsByUserId(@Arg("idUser") idUser: string) {
    return this.recipsController.findAllByUserId(idUser);
  }

  @Query(() => UsersModel, { nullable: true })
  async findUserById(@Arg("idUser") idUser: string) {
    return this.usersController.findOneById(idUser);
  }

  @Mutation(() => UsersUpdateModel)
  async updateUser(@Arg("data") data: UpdateUserInput) {
    return this.usersController.updateUser(data);
  }
  
}