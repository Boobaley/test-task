import { SequlizeRepository } from '../../../models/utils/SequlizeRepository';
import { UserGroup } from '../../../models';
import { sequelize } from '../../../config/db/database';
import { groupRepository } from '../../group/repository/group.repository';
import { GroupStatus } from '../../group/types/groupStatus.type';

class UserGroupRepository extends SequlizeRepository<UserGroup> {
   constructor() {
      super(UserGroup);
   }

   async removeUserFromGroup(userId: number, groupId: number) {
      const transaction = await sequelize.transaction();
      try {
         const groupToRemoveFrom = await UserGroup.findOne({
            where: {
               user_id: userId,
               group_id: groupId,
            },
            transaction,
         });

         if (!groupToRemoveFrom) {
            throw new Error('User not in group');
         }

         await UserGroup.destroy({
            where: { user_id: userId, group_id: groupId },
            transaction,
         });

         const membersCount = await UserGroup.count({
            where: { group_id: groupId },
            transaction,
         });

         if (membersCount === 0) {
            await groupRepository.update(
               groupId,
               {
                  status: GroupStatus.EMPTY,
               },
               { transaction },
            );
         }

         await transaction.commit();
      } catch (error) {
         await transaction.rollback();

         throw error;
      }
   }
}

export const userGroupRepository = new UserGroupRepository();
