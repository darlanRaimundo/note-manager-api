import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://darlanraimundo123:uWhaR9385VGvmmGM@note-manager.sl64p.mongodb.net/?retryWrites=true&w=majority&appName=Note-Manager',
      ),
  },
];
