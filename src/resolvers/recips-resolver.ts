import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { CreateRecipsInput } from "../dtos/inputs/create-recips-inputs";
import { RecipsModel } from "../dtos/models/recips-model";
import { UsersModel } from "../dtos/models/users-model";
import RecipsController from "../controllers/recips_controller";

@Resolver(() => RecipsModel)
export class RecipsResolver {
  recipsService: RecipsController;

  constructor() {
    this.recipsService = new RecipsController();
  }

  @Query(() => [RecipsModel])
  async listAllrecips() {
    return this.recipsService.findAll();
  }

  @Mutation(() => RecipsModel)
  async createRecip(@Arg("data") data: CreateRecipsInput) {
    return this.recipsService.create({
      title: data.title,
      makings: data.makings,
      description: data.description,
      type: data.type,
      createdAt: new Date(),
      updatedAt: new Date(),
      idUser: data.idUser,
    });
  }

  @FieldResolver(() => [RecipsModel])
  async recips(@Root() user: UsersModel) {
    const userRecips = await this.recipsService.findAllByUserId(user.idUser) as RecipsModel[];

    const recips = userRecips.map((recip) => ({
      title: recip.title,
      makings: recip.makings,
      description: recip.description,
      type: recip.type,
      createdAt: recip.createdAt,
      updatedAt: recip.updatedAt,
      user: {
        name: user.name,
      },
    }));

    return recips;
  }
}