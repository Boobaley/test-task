import { Model } from 'sequelize'

export interface FindAndCountDto<T extends Model> {
    count: number
    rows: T[]
}
