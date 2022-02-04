
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { deleteFile } from '@utils/file';
import { inject, injectable } from 'tsyringe';

interface IRequest {
    user_id: string,
    avatarFile: string
}
@injectable()
class UpdateUserAvatarUseCase {
  constructor(
        @inject(UsersRepository)
        private usersRepository: IUsersRepository,
  ) { }

  async execute({ user_id, avatarFile }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);

    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }
    user.avatar = avatarFile;

    await this.usersRepository.create(user);
  }
}

export { UpdateUserAvatarUseCase };
