const mongoose = require("mongoose");

const userSchema = require("../models/user");

const registerUser = async (req, res) => {
    try {
        const user = await userSchema.create(req.body);
        res.status(200).json(user);
        console.log(user);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Error creating user", error: error.message });
    }
};

const loginUsers = async (req, res) => {
    try {
        const users = await userSchema.find();
        req.status(200).json(users);
    } catch (error) {
        console.error("Error getting users:", error);
        res.status(500).json({ message: "Error getting users", error: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userSchema.findById(id);
        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Error getting user:", error);
        res.status(500).json({ message: "Error getting user", error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userSchema.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }
        res.status(200).json({ message: "user deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Error deleting user", error: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await userSchema.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "user not found" });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: "Error updating user", error: error.message });
    }
};



module.exports = { 
    registerUser, 
    loginUsers, 
    loginUser, 
    deleteUser,
    updateUser
};