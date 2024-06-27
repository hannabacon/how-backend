import { InputType, Field } from "type-graphql";

@InputType()
export class UpdateUserInput {

  @Field()
  idUser: string;
  
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  password?: string;
}