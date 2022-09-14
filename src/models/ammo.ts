import mongoose, { Document, Schema } from 'mongoose';

export interface IAmmo {
    name: string;
    caliber: string;
}

export interface IAmmoModel extends IAmmo, Document {}

const AmmoSchema: Schema = new Schema(
    {
        name: { type: String, require: true },
        caliber: { type: Schema.Types.ObjectId, required: true, ref: 'Caliber' }
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default mongoose.model<IAmmoModel>('Ammo', AmmoSchema);
