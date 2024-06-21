import { InputType, Field } from "type-graphql";

@InputType()
export class UpdateRecipsInput {

  @Field()
  idRecips: string;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  preparation?: string;
  
  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => String, { nullable: true })
  makings?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  type?: string;
}
