import { PrismaClient, User } from "@prisma/client";

class UsersController {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findAll() {
    try {
      return this.prisma.user.findMany({
        select: {
          name: true,
        },
      });
    } catch (e) {
      return e;
    }
  }

  async createUser(data: Omit<User, 'idUser' | 'createdAt' | 'updatedAt'>) {
    try {
      return this.prisma.user.create({
        data: {
          ...data
        },
      });
    } catch (e) {
      return e;
    }
  }

  async findRecipsByUserId(idUser: string) {
    try {
      return this.prisma.recips.findMany({
        where: {
          idUser: idUser,
        },
      });
    } catch (e) {
      return e;
    }
  }

  async findOneById(idUser: string) {
    try {
      return this.prisma.user.findUnique({
        where: {
          idUser: idUser,
        },
      });
    } catch (e) {
      return e;
    }
  }

  async updateUser(data: Omit<Partial<User>, 'createdAt' | 'updatedAt' | 'image'>) {
    try {
      return this.prisma.user.update({
        where: { idUser: data.idUser },
        data: {
          ...data,
        },
      });
    } catch (e) {
      return e;
    }
  }
}

export default UsersController;
