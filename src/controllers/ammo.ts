import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Ammo from '../models/ammo';

const createAmmo = (req: Request, res: Response, next: NextFunction) => {
    const { name, caliber } = req.body;
    const ammo = new Ammo({
        _id: new mongoose.Types.ObjectId(),
        name
    });

    return ammo
        .save()
        .then((ammo) => res.status(201).json({ ammo }))
        .catch((error) => res.status(500).json({ error }));
};
const readAmmo = (req: Request, res: Response, next: NextFunction) => {
    const ammoID = req.params.ammoID;

    return Ammo.findById(ammoID)
        .then((ammo) => (ammo ? res.status(200).json({ ammo }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};
const readAll = (req: Request, res: Response, next: NextFunction) => {
    return Ammo.find()
        .then((ammo) => res.status(200).json({ ammo }))
        .catch((error) => res.status(500).json({ error }));
};
const updateAmmo = (req: Request, res: Response, next: NextFunction) => {
    const ammoID = req.params.ammoID;

    return Ammo.findById(ammoID)
        .then((ammo) => {
            if (ammo) {
                ammo.set(req.body);

                return ammo
                    .save()
                    .then((ammo) => res.status(201).json({ ammo }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                return res.status(404).json({ message: 'not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};
const deleteAmmo = (req: Request, res: Response, next: NextFunction) => {
    const ammoID = req.params.ammoID;

    return Ammo.findByIdAndDelete(ammoID)
        .then((ammo) => (ammo ? res.status(201).json({ ammo, message: 'Deleted' }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createAmmo, readAmmo, readAll, updateAmmo, deleteAmmo };
