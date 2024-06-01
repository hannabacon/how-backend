// import { ListAllRecipsByUserId } from '@/domain/usecases/list-all-recips-by-userid'
// import { Controller } from '@/presentation/protocols/controller'

// export class ListAllRecipsByUserIdController implements Controller {
//   constructor(private readonly listAllRecipsByUserId: ListAllRecipsByUserId) {}

//   async handle(request: ListAllRecipsByUserIdController.Request): Promise<ListAllRecipsByUserIdController.Response> {
//     return await this.listAllRecipsByUserId.perform(request.userId)
//   }
// }

// export namespace ListAllRecipsByUserIdController {
//   export type Request = {
//     userId: number
//   }

//   export type Response = any
// }
