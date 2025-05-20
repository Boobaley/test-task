import { PaginationDto } from '../../../dto/pagination.dto';
import { groupRepository } from '../repository/group.repository';

export class GroupService {
   static async getAllGroups(pagination: PaginationDto) {
      return groupRepository.findAll(pagination);
   }
}
