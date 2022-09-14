import express from 'express';
import controller from '../controllers/ammo';

const router = express.Router();

router.post('/create', controller.createAmmo);
router.get('/get/:ammoID', controller.readAmmo);
router.get('/get', controller.readAll);
router.patch('/update/:ammoID', controller.updateAmmo);
router.delete('/delete/:ammoID', controller.deleteAmmo);

export = router;
