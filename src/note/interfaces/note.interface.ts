import { Document } from 'mongoose';

export interface Note extends Document {
  readonly title: string;
  readonly description: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly userId: string;
}
