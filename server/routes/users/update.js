let express = require('express');
let router = express.Router();
const Users = require("../../models/user");

router.put('/:id', async function(req, res, next) {
    const id = req.params.id;
    const { name } = req.body;

    try {
        console.log({Users});
        const user = await Users.findByIdAndUpdate(id, {
            name
        }, { new: true }); // new: true returns the updated document

        if (!user) {
        return res.status(404).send();
        }

        res.send(user);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});

module.exports = router;
