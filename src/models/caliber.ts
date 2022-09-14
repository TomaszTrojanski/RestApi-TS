import mongoose, { Document, Schema } from 'mongoose';

export interface ICaliber {
    caliber: string;
}

export interface IcaliberModel extends ICaliber, Document {}

const CaliberSchema: Schema = new Schema(
    {
        caliber: { type: String, require: true }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IcaliberModel>('Caliber', CaliberSchema);