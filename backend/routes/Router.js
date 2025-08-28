import express from 'express';
import ProductRoutes from '../controller/admin/tour.js';
import TourRoutes from '../controller/user/tour.js';
import AuthRoutes from '../controller/admin/auth/auth.js';
import UserRoutes from '../controller/user/auth/auth.js';
import * as PaymentRoutes from '../controller/admin/payment.js';

    
const router = express.Router();

// ------------------admin register and login routes----------------

router.post('/register', AuthRoutes.register);
router.post('/login', AuthRoutes.login);
router.put('/change-password', AuthRoutes.changePassword);

// ------------------tour&user routes----------------

router.get('/Alltours', ProductRoutes.displayTours);
router.post('/inserttours', ProductRoutes.insertTours);
router.delete('/deletetours/:title', ProductRoutes.deleteTours);
router.put('/updatetours/:title', ProductRoutes.updateTours);
router.get('/Allusers', ProductRoutes.displayusers);
router.get('/orders/:username', ProductRoutes.getUserOrders);

// ------------------orders routes----------------

router.post('/order', ProductRoutes.allorders);
router.get('/allorders', ProductRoutes.displayorders);

// ------------------user registation and login routes----------------

router.post('/userregister', UserRoutes.register);
router.post('/userlogin', UserRoutes.login);
router.put("/change-password", UserRoutes.changePassword);

// ------------------user tour display routes----------------

router.get('/displaytour', TourRoutes.displayTours);
router.get('/displaytour/:title', TourRoutes.getTourById);


// ------------------payment routes----------------

router.post('/payment/process', PaymentRoutes.processPayment);
router.get('/getKey', PaymentRoutes.getKey);
router.post('/email', PaymentRoutes.sendEmail);


export default router;
