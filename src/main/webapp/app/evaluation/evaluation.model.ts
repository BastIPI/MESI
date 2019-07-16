import {User} from "../user/user.model";
import {Level} from "../level/level.model";

export class Evaluation {
  id: number;
  user: User;
  level: Level;
  date: Date;
  type: number;
}
