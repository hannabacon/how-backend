import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateUsersInput {

  @Field()
  name: string;

  @Field()
  image: string;

  @Field()
  email: string;

  @Field()
  password: string;
}