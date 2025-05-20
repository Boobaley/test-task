import { SequlizeRepository } from '../../../models/utils/SequlizeRepository';
import { Group } from '../../../models';

class GroupRepository extends SequlizeRepository<Group> {
   constructor() {
      super(Group);
   }
}

export const groupRepository = new GroupRepository();
