import { PrismaClient, Recips } from "@prisma/client";

class RecipsController {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findAll() {
    try {
      return this.prisma.recips.findMany(
        {
          select: {
            title: true,
            makings: true,
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

  async create(data: Omit<Recips, 'idRecips'>) {
    try {
      return this.prisma.recips.create({
        data: {
          ...data
        },
      });


  } catch (e) {
    return e;
    }
  }
}

export default RecipsController;