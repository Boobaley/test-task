import { userRepository } from '../repository/user.repository';
import { PaginationDto } from '../../../dto/pagination.dto';
import { User } from '../../../models';
import { userGroupRepository } from '../../userGroup/repository/userGroup.repository';

export class UserService {
   static async getAllUsers(pagination: PaginationDto): Promise<User[]> {
      return userRepository.findAll(pagination);
   }

   static removeFromGroup(userId: number, groupId: number) {
      return userGroupRepository.removeUserFromGroup(userId, groupId);
   }
}
