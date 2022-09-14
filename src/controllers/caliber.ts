import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Caliber from '../models/caliber';

const createCaliber = (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    const caliber = new Caliber({
        _id: new mongoose.Types.ObjectId(),
        name
    });

    return caliber
        .save()
        .then((caliber) => res.status(201).json({ caliber }))
        .catch((error) => res.status(500).json({ error }));
};
const readCaliber = (req: Request, res: Response, next: NextFunction) => {
    const caliberID = req.params.caliberID;

    return Caliber.findById(caliberID)
        .then((caliber) => (caliber ? res.status(200).json({ caliber }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};
const readAll = (req: Request, res: Response, next: NextFunction) => {
    return Caliber.find()
        .then((caliber) => res.status(200).json({ caliber }))
        .catch((error) => res.status(500).json({ error }));
};
const updateCaliber = (req: Request, res: Response, next: NextFunction) => {
    const caliberID = req.params.caliberID;

    return Caliber.findById(caliberID)
        .then((caliber) => {
            if (caliber) {
                caliber.set(req.body);

                return caliber
                    .save()
                    .then((caliber) => res.status(201).json({ caliber }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                return res.status(404).json({ message: 'not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};
const deleteCaliber = (req: Request, res: Response, next: NextFunction) => {
    const caliberID = req.params.caliberID;

    return Caliber.findByIdAndDelete(caliberID)
        .then((caliber) => (caliber ? res.status(201).json({ caliber, message: 'Deleted' }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createCaliber, readCaliber, readAll, updateCaliber, deleteCaliber };
