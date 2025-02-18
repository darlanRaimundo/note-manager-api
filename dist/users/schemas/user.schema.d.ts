import * as mongoose from 'mongoose';
export declare const UsersSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string | null | undefined;
    email?: string | null | undefined;
    password?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name?: string | null | undefined;
    email?: string | null | undefined;
    password?: string | null | undefined;
}>> & mongoose.FlatRecord<{
    name?: string | null | undefined;
    email?: string | null | undefined;
    password?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
