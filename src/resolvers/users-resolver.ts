import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { CreateUsersInput } from "../dtos/inputs/create-users-input";
import { UsersModel } from "../dtos/models/users-model";
import { RecipsModel } from "../dtos/models/recips-model";

@Resolver(() => UsersModel)
export class UsersResolver{

    @Query(() => [UsersModel])
    async users() {
        return [
            {
                name: 'Yasmin',
                email: 'yasmin@teste',
                password: '123',

            },
        ]   
    }


    @Mutation(() => UsersModel)
    async createUser(@Arg('data') data: CreateUsersInput){
       const user = 
         {
              id: data.id,
              name: data.name,
              email: data.email,
              password: data.password
         }
         
        return user;
    }

    @FieldResolver(() => RecipsModel)
    async recips(@Root() user: UsersModel){
        console.log(user);

        return {
            id: '1',
            title: 'Bolo de cenoura',
            description: 'Bolo de cenoura com cobertura de chocolate',
            makings: 'cenoura, farinha, ovos, chocolate',
            type: 1
        }
       
    }
}