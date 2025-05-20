import {
   Attributes,
   CreateOptions,
   CreationAttributes,
   DestroyOptions,
   FindOptions,
   Model,
   ModelStatic,
   UpdateOptions,
} from 'sequelize';
import { PaginationDto } from '../../dto/pagination.dto';

export class SequlizeRepository<T extends Model> {
   protected model: ModelStatic<T>;

   constructor(model: ModelStatic<T>) {
      this.model = model;
   }

   async findAll(
      pagination: PaginationDto,
      options?: FindOptions<Attributes<T>>,
   ): Promise<T[]> {
      return this.model.findAll({
         ...pagination,
         ...options,
      });
   }

   async findById(id: number, options?: FindOptions): Promise<T> {
      return this.model.findByPk(id, options);
   }

   async create(
      data: CreationAttributes<T>,
      options?: CreateOptions,
   ): Promise<T> {
      return this.model.create(data, options);
   }

   async update(
      id: number,
      data: CreationAttributes<T>,
      options?: Partial<UpdateOptions>,
   ): Promise<T> {
      const instance = await this.findById(id);

      if (!instance) return null;

      return instance.update(data, options);
   }

   async delete(id: number, options?: DestroyOptions) {
      return this.model.destroy({ where: { id }, ...options });
   }
}
