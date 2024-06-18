import { PrismaClient, Recips } from "@prisma/client";
import { RecipsModel } from "../dtos/models/recips-model";

class RecipsController {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createRecips(data: Omit<RecipsModel, 'idRecips' | 'createdAt' | 'updatedAt' | 'user'>) {
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
      return this.prisma.recips.findMany(
        {
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
        }
      );
    } catch (e) {
      return e;
    }
  }

  async findOneRecipByIdRecips(idRecips: string) {
    try {
      return this.prisma.recips.findUnique({
        where: {
          idRecips: idRecips
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
        idUser: idUser
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
    }
  );
  } catch (e) {
    return e;
  }
}

  async updateTypeByIdRecips(recip: Recips) {
    try {
      return this.prisma.recips.update({
        where: {
          idRecips: recip.idRecips,
        },
        data: {
          type: recip.type,
        },
      });
    } catch (e) {
      return e;
    }
  }
}

export default RecipsController;