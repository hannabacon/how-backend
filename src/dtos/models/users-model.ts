import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UsersModel {

  @Field()
  idUser: string;

  @Field()
  image: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}