import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Weapon from '../models/weapon';

const createWeapon = (req: Request, res: Response, next: NextFunction) => {
    const { name, caliber } = req.body;
    const weapon = new Weapon({
        _id: new mongoose.Types.ObjectId(),
        name
    });

    return weapon
        .save()
        .then((weapon) => res.status(201).json({ weapon }))
        .catch((error) => res.status(500).json({ error }));
};
const readWeapon = (req: Request, res: Response, next: NextFunction) => {
    const weaponID = req.params.weaponID;

    return Weapon.findById(weaponID)
        .then((weapon) => (weapon ? res.status(200).json({ weapon }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};
const readAll = (req: Request, res: Response, next: NextFunction) => {
    return Weapon.find()
        .then((weapon) => res.status(200).json({ weapon }))
        .catch((error) => res.status(500).json({ error }));
};
const upeateWeapon = (req: Request, res: Response, next: NextFunction) => {
    const weaponID = req.params.weaponID;

    return Weapon.findById(weaponID)
        .then((weapon) => {
            if (weapon) {
                weapon.set(req.body);

                return weapon
                    .save()
                    .then((weapon) => res.status(201).json({ weapon }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                return res.status(404).json({ message: 'not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};
const deleteWeapon = (req: Request, res: Response, next: NextFunction) => {
    const weaponID = req.params.weaponID;

    return Weapon.findByIdAndDelete(weaponID)
        .then((weapon) => (weapon ? res.status(201).json({ weapon, message: 'Deleted' }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createWeapon, readWeapon, readAll, upeateWeapon, deleteWeapon };
