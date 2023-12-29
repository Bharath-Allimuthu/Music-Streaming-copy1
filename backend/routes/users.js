const express = require("express");
const router = express.Router();
const {registerUser, loginUsers, loginUser, deleteUser,updateUser} = require("../controllers/userController");
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validObjectId = require("../middleware/validObjectId");

router.post("/register", registerUser);

router.get("/login", loginUsers);

router.get("/:id", loginUser);

router.delete("/delete", deleteUser);

router.patch("/update", updateUser);

router.post("/", async(req, res) => {
    const {error} = validate(req.body);
    if (error)return res.status(400).send({message: error.details[0].message});

    const user = await User.findOne({email: req.body.email});
    if (user)
    return res.status(403).send({message:"User with given email already exist!"})

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password,salt);
    let newUser = await new User({
        ...req.body,
        password: hashPassword
    }).save();

    newUser.password = undefined;
    newUser.__v = undefined;

    res.status(200)
    .send({data: newUser, message:"Account created sucessfully"})
});



module.exports = router;