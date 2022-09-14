import express from 'express';
import controller from '../controllers/caliber';
//import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

router.post('/create', controller.createCaliber);
router.get('/get/:caliberID', controller.readCaliber);
router.get('/get', controller.readAll);
router.patch('/update/:caliberID', controller.updateCaliber);
router.delete('/delete/:caliberID', controller.deleteCaliber);

/* 
router.post('/create', ValidateJoi(Schemas.caliber.create), controller.createCaliber);
router.get('/get/:caliberID', controller.readCaliber);
router.get('/get', controller.readAll);
router.patch('/update/:caliberID', ValidateJoi(Schemas.author.update), controller.updateCaliber);
router.delete('/delete/:caliberID', controller.deleteCaliber); */

export = router;
