import { Member } from "./Member.js";
import { User } from "./User.js"

export class MemberFactory {
  public create(user: User): Member {
    return new Member({
      id: user.id,
      joinedAt: new Date()
    })
  }

}