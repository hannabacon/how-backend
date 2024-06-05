import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class RecipsModel {

    @Field()
    id: string;

    @Field()
    title: string;

    @Field()
    description: string;

    @Field()
    makings: string;

    @Field()
    type: number;

}