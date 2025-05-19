import { User } from './user/User.model'
import { Group } from './group/Group.model'
import { UserGroup } from './userGroup/UserGroup.model'

User.belongsToMany(Group, {
    through: UserGroup,
    foreignKey: 'user_id',
    otherKey: 'group_id',
})

Group.belongsToMany(User, {
    through: UserGroup,
    foreignKey: 'group_id',
    otherKey: 'user_id',
})

export { User, Group, UserGroup }
