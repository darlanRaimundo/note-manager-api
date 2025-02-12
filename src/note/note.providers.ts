import { Connection } from 'mongoose';
import { NoteSchema } from './schemas/note.schema';

export const noteProviders = [
  {
    provide: 'NOTE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Notes', NoteSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
