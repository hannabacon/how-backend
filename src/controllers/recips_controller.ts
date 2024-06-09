import { PrismaClient, Recips } from "@prisma/client";

class RecipsController {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
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
}

export default RecipsController;