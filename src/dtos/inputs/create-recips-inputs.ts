import { Field, InputType } from "type-graphql";

@InputType()
export class CreateRecipsInput {
  @Field()
  idUser: string;

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