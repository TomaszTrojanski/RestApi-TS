import express from 'express';
import controller from '../controllers/caliber';

const router = express.Router();

router.post('/create', controller.createCaliber);
router.get('/get/:caliberID', controller.readCaliber);
router.get('/get', controller.readAll);
router.patch('/update/:caliberID', controller.updateCaliber);
router.delete('/delete/:caliberID', controller.deleteCaliber);

export = router;
