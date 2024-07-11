import { Member } from './Member.js'
import { User } from './User.js'

export class MemberFactory {
  create(user: User): Member {
    return new Member({
      id: user.id,
      joinedAt: new Date(),
    })
  }
}
