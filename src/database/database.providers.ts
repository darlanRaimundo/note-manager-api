import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await mongoose.connect(process.env.MONGO_URI || ''),
  },
];
