import { PrismaClient, Recips } from "@prisma/client";
import { RecipsModel } from "../dtos/models/recips-model";
import { RecipsUpdateModel } from "../dtos/models/recips-model-update";
import { UpdateRecipsInput } from "../dtos/inputs/update-recips-inputs";

class RecipsController {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createRecips(
    data: Omit<RecipsModel, "idRecips" | "createdAt" | "updatedAt" | "user">
  ) {
    try {
      return this.prisma.recips.create({
        data: {
          ...data,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    } catch (e) {
      return e;
    }
  }

  async findAll() {
    try {
      return this.prisma.recips.findMany({
        select: {
          idRecips: true,
          title: true,
          image: true,
          makings: true,
          preparation: true,
          description: true,
          type: true,
          createdAt: true,
          updatedAt: true,
          user: {
            select: {
              name: true,
            },
          },
        },
      });
    } catch (e) {
      return e;
    }
  }

  async findOneRecipByIdRecips(idRecips: string) {
    try {
      return this.prisma.recips.findUnique({
        where: {
          idRecips: idRecips,
        },
        select: {
          title: true,
          image: true,
          makings: true,
          preparation: true,
          description: true,
          type: true,
          createdAt: true,
          updatedAt: true,
          user: {
            select: {
              name: true,
            },
          },
        },
      });
    } catch (e) {
      return e;
    }
  }

  async findAllByUserId(idUser: string) {
    try {
      return this.prisma.recips.findMany({
        where: {
          idUser: idUser,
        },
        select: {
          title: true,
          image: true,
          makings: true,
          preparation: true,
          description: true,
          type: true,
          createdAt: true,
          updatedAt: true,
          user: {
            select: {
              name: true,
            },
          },
        },
      });
    } catch (e) {
      return e;
    }
  }

  async updateRecips(data: UpdateRecipsInput) {
    try {
      return await this.prisma.recips.update({
        where: {
          idRecips: data.idRecips,
        },
        data: {
          title: data.title,
          preparation: data.preparation,
          image: data.image,
          makings: data.makings,
          description: data.description,
          type: data.type,
          updatedAt: new Date(), 
        },
      });
    } catch (e) {
      console.error("Error updating recips:", e);
      throw e; 
    }
  }

  async deleteRecips(idRecips: string) {
    try {
      return await this.prisma.recips.delete({
        where: {
          idRecips: idRecips,
        },
      });
    } catch (e) {
      console.error("Error deleting recips:", e);
      throw e;
    }
  }

}

export default RecipsController;
