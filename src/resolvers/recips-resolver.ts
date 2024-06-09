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

  @Query(() => RecipsModel, { nullable: true })
async findRecipsDetailsByIdRecips(@Arg('idRecips') idRecips: string) {
  return this.recipsService.findOneRecipByIdRecips(idRecips);
}

  @Mutation(() => RecipsModel)
  async createRecip(@Arg("data") data: CreateRecipsInput) {
    return this.recipsService.create({
      title: data.title,
      image: data.image,
      makings: data.makings,
      preparation: data.preparation,
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
      idRecips: recip.idRecips,
      title: recip.title,
      image: recip.image,
      makings: recip.makings,
      preparation: recip.preparation,
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