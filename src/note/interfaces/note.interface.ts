import { Document } from 'mongoose';

export interface Note extends Document {
  readonly description: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
