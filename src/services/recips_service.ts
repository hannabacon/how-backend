import { PrismaClient } from "@prisma/client";
import { Service } from "typedi";
import { CreateRecipsInput } from "../dtos/inputs/create-recips-inputs";

const prisma = new PrismaClient();

@Service()
export class RecipsService {
  async createRecips(data: CreateRecipsInput) {
    const recips = await prisma.recips.create({
      data: {
        idUser: data.idUser,
        title: data.title,
        preparation: data.preparation,
        image: data.image,
        makings: data.makings,
        description: data.description,
        type: data.type,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return recips;
  }

  async updateTypeByIdRecips(idRecips: string, newType: string) {
    const recips = await prisma.recips.update({
      where: { idRecips: idRecips },
      data: { type: newType, updatedAt: new Date() },
    });
    return recips;
  }
}