import { randomUUID } from 'crypto';

export class Images {
  readonly id: string;
  image_url: string;
  constructor() {
    this.id = randomUUID();
  }
}
