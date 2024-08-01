const express = require('express');
const router = express.Router();
const userController = require('../controller/userControl'); // Corrected path
const adminController=require('../controller/adminControl');

router.post('/signup', userController.createUser);
router.post('/login',userController.loginUser);


router.post('/add',adminController.addProduct);
router.put('/update/:id',adminController.updateProduct);
router.delete('/delete/:id',adminController.deleteProduct);
router.get('/getproducts',adminController.getAllProduct);

module.exports = router;
