import { PrismaClient, User } from "@prisma/client";

class UserController {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findAll() {
    try {
      return this.prisma.user.findMany(
        {
          select: {
            name: true,
          },
        }
      );
    } catch (e) {
      return e;
    }
  }


  async create(data: Omit<User, 'idUser'>) {
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
}

export default UserController;