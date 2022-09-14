import express from 'express';
import controller from '../controllers/weapon';

const router = express.Router();

router.post('/create', controller.createWeapon);
router.get('/get/:weaponID', controller.readWeapon);
router.get('/get', controller.readAll);
router.patch('/update/:weaponID', controller.updateWeapon);
router.delete('/delete/:weaponID', controller.deleteWeapon);

export = router;
