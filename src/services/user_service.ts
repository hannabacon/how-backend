import { PrismaClient } from "@prisma/client";
import { Service } from "typedi";
import { CreateRecipsInput } from "../dtos/inputs/create-recips-inputs";
import { CreateUsersInput } from "../dtos/inputs/create-user-inputs";

const prisma = new PrismaClient();

@Service()
export class RecipsService {
  async createUser(data: CreateUsersInput) {
    const user = await prisma.user.create({
      data: {
        name: data.name,
        image: data.image,
        email: data.email,
        password: data.password,
      },
    });
    return user;
  }
}