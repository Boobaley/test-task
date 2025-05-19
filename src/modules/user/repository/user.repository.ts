import { User } from '../../../models'
import { SequlizeRepository } from '../../../models/utils/SequlizeRepository'

class UserRepository extends SequlizeRepository<User> {
    constructor() {
        super(User)
    }
}

export const userRepository = new UserRepository()
