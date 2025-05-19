import { userRepository } from '../repository/user.repository'
import { PaginationDto } from '../../../dto/pagination.dto'
import { User } from '../../../models'

export class UserService {
    static async getAllUsers(pagination: PaginationDto): Promise<User[]> {
        return userRepository.findAll(pagination)
    }
}
