import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UsersModel {

  @Field()
  idUser: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}