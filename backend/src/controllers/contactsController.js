const getContacts = (req, res) => {
    res.status(200).json({ message: 'Get all contacts' });
};

const createContact = (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(401);
        throw new Error('Missing required fields');
    }
    res.status(201).json({ message: 'Create new contact' });
};

const getContactById = (req, res) => {
    res.status(200).json({ message: `Get contact ${req.params.id}` });
};

const updateContact = (req, res) => {
    res.status(200).json({ message: `Update contact ${req.params.id}` });
};

const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete contact ${req.params.id}` });
};

module.exports = {
    getContacts,
    createContact,
    getContactById,
    updateContact,
    deleteContact,
};
