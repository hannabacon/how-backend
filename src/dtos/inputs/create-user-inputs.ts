import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateUsersInput {

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