import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../config/db/database'

export class UserGroup extends Model {}

UserGroup.init(
    {
        user_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            references: { model: 'users', key: 'id' },
        },
        group_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            references: { model: 'groups', key: 'id' },
        },
    },
    {
        sequelize,
        tableName: 'user_groups',
        timestamps: false,
    }
)
