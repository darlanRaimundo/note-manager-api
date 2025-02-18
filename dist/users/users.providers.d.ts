import { Connection } from 'mongoose';
export declare const userProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        name?: string | null | undefined;
        email?: string | null | undefined;
        password?: string | null | undefined;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        name?: string | null | undefined;
        email?: string | null | undefined;
        password?: string | null | undefined;
    }> & {
        name?: string | null | undefined;
        email?: string | null | undefined;
        password?: string | null | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        name?: string | null | undefined;
        email?: string | null | undefined;
        password?: string | null | undefined;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        name?: string | null | undefined;
        email?: string | null | undefined;
        password?: string | null | undefined;
    }>> & import("mongoose").FlatRecord<{
        name?: string | null | undefined;
        email?: string | null | undefined;
        password?: string | null | undefined;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    inject: string[];
}[];
