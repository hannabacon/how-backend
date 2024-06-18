import { InputType, Field } from "type-graphql";

@InputType()
export class UpdateRecipsInput {
  @Field()
  idRecips: string;

  @Field()
  type: string;
}