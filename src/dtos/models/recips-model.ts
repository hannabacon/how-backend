import { Field, ObjectType } from "type-graphql";
import { UsersModel } from "./users-model";

@ObjectType()
export class RecipsModel {

  @Field(type => UsersModel)
  user: UsersModel;

  @Field()
  idRecips: string;

  @Field()
  idUser: string;

  @Field()
  title: string;

  @Field()
  preparation: string;

  @Field()
  image: string;

  @Field()
  makings: string;

  @Field()
  description: string;

  @Field()
  type: string;
}