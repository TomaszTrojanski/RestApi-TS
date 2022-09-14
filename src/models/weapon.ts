import mongoose, { Document, Schema } from 'mongoose';

export interface IWeapon {
    name: string;
    caliber: string;
}

export interface IWeaponModel extends IWeapon, Document {}

const WeaponSchema: Schema = new Schema(
    {
        name: { type: String, require: true },
        caliber: { type: Schema.Types.ObjectId, required: true, ref: 'Caliber' }
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default mongoose.model<IWeaponModel>('Weapon', WeaponSchema);
