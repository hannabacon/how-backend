import { Field, InputType } from 'type-graphql';

@InputType()
export class DeleteRecipsInput {
  @Field()
  idRecips: string;
}

