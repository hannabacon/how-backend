import { Field, ObjectType } from "type-graphql";
import { UsersModel } from "./users-model";

@ObjectType()
export class RecipsModel {

  @Field(type => UsersModel)
  user: UsersModel;

  @Field()
  userId: string;

  @Field()
  title: string;

  @Field()
  makings: string;

  @Field()
  description: string;

  @Field()
  type: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

}