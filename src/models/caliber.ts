import mongoose, { Document, Schema } from 'mongoose';

export interface ICaliber {
    name: string;
}

export interface ICaliberModel extends ICaliber, Document {}

const CaliberSchema: Schema = new Schema(
    {
        name: { type: String, require: true }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<ICaliberModel>('Caliber', CaliberSchema);
