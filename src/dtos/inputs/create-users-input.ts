import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateUsersInput {

    @Field()
    id: string;
    
    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    password: string;
}
