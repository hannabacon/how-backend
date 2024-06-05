import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UsersModel {

    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    password: string;
}
