import { Field, ObjectType } from "type-graphql";
import { UsersModel } from "./users-model";

@ObjectType()
export class RecipsDeleteModel {

  @Field()
  idRecips: string;
}