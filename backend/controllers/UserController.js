const User = require('../models/User');

exports.getUser = (req, res) => {
    const userId = req.params.id;
    const user = User.findById(userId);
    res.json(user);
};
