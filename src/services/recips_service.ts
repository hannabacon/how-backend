import { PrismaClient } from "@prisma/client";
import { Service } from "typedi";
import { CreateRecipsInput } from "../dtos/inputs/create-recips-inputs";
import { UpdateRecipsInput } from "../dtos/inputs/update-recips-inputs";

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

  async updateRecips(data: UpdateRecipsInput) {
    const updateData: any = {};
    if (data.title !== undefined) updateData.title = data.title;
    if (data.preparation !== undefined)
      updateData.preparation = data.preparation;
    if (data.image !== undefined) updateData.image = data.image;
    if (data.makings !== undefined) updateData.makings = data.makings;
    if (data.description !== undefined)
      updateData.description = data.description;
    if (data.type !== undefined) updateData.type = data.type;

    const recips = await prisma.recips.update({
      where: {
        idRecips: data.idRecips,
      },
      data: {
        ...updateData,
        updatedAt: new Date(),
      },
    });
    return recips;
  }
}
