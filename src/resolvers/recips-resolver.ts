import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { CreateRecipsInput } from "../dtos/inputs/create-recips-inputs";
import { RecipsModel } from "../dtos/models/recips-model";
import { UsersModel } from "../dtos/models/users-model";
import RecipsController from "../controllers/recips_controller";
import { UpdateRecipsInput } from "../dtos/inputs/update-recips-inputs";
import { RecipsUpdateModel } from "../dtos/models/recips-model-update";
import { RecipsDeleteModel } from "../dtos/models/recips-model-delete";

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
  async createRecips(@Arg("data") data: CreateRecipsInput) {
    return this.recipsService.createRecips({
      title: data.title,
      image: data.image,
      makings: data.makings,
      preparation: data.preparation,
      description: data.description,
      type: data.type,
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
      user: {
        name: user.name,
      },
    }));

    return recips;
  }

  @Mutation(() => RecipsUpdateModel)
  async updateRecips(@Arg("data") data: UpdateRecipsInput) {
    try {
      return await this.recipsService.updateRecips({
        idRecips: data.idRecips,
        title: data.title,
        image: data.image,
        makings: data.makings,
        preparation: data.preparation,
        description: data.description,
        type: data.type,
      });
    } catch (error) {
      return error;
    }
  }

  @Mutation(() => RecipsDeleteModel)
  async deleteRecips(@Arg("idRecips") idRecips: string) {
    try {
      return await this.recipsService.deleteRecips(idRecips);
    } catch (error) {
      return error;
    }
  }
}