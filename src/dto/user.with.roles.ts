import {User} from "../entity/user";
import {Role} from "../entity/role";

export interface UserWithRoles {
    user: User
    roles: Set<Role>
}
