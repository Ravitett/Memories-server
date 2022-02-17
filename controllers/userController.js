const { userModel } = require("../models/userModel");
exports.userController = {

    async getAll(req, res) {
        try {
            let data = await userModel.find({});
            res.json(data);
        } catch (error) {
            res.status(400).json({ status: "error", message: `Error in DB connection` });
        }
    },

    async getByID(req, res) {
        try {
            let data = await userModel.findOne({ _id: req.params.id });
            res.json(data);
        } catch (error) {
            res.status(400).json({ status: "error", message: `Error in DB connection` });
        }
    },

    async update(req, res) {
        try {
            let data = await userModel.updateOne({ _id: req.params.id }, req.body);
            if (data.acknowledged && data.modifiedCount > 1) {
                res.json({ status: "success", message: `User updated successfully` });
            } else {
                res.json({ status: "error", message: `User not updated` });
            }
        } catch (error) {
            res.status(400).json({ status: "error", message: `Error in DB connection` });
        }
    },

    async delete(req, res) {
        try {
            let data = await userModel.deleteOne({ _id: req.params.id });
            if (data) {
                res.json({ status: "success", message: `User deleted successfully` });
            } else {
                res.json({ status: "error", message: `User id is not exist` });
            }
        } catch (error) {
            res.status(400).json({ status: "error", message: `Error in DB connection` });
        }
    }
}