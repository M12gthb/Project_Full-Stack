import { randomUUID } from 'crypto';
import { Anouncements } from 'src/modules/anouncements/entities/anouncements.entity';
import { User } from 'src/modules/users/entities/user.entitie';

export class Comments {
  readonly id: string;
  comment: string;
  constructor() {
    this.id = randomUUID();
  }
  anouncementId: string;
  userId: string;
  user?: User;
  anouncement?: Anouncements;
}
