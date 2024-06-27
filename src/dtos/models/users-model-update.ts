import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UsersUpdateModel {

  @Field()
  idUser: string;

  @Field()
  name?: string;

  @Field()
  image?: string;

  @Field()
  email?: string;

  @Field()
  password?: string;

}
