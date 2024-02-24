const express = require('express');
const contactsController = require('../controllers/contactsController');
const validateTokenHandler = require('../middlewares/validateTokenHandler');

const router = express.Router();

router.use(validateTokenHandler);
router
    .route('/')
    .get(contactsController.getContacts)
    .post(contactsController.createContact);

router
    .route('/:id')
    .get(contactsController.getContactById)
    .put(contactsController.updateContact)
    .delete(contactsController.deleteContact);

module.exports = router;
