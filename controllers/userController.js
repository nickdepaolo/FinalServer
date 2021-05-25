const Express = require("express");
const router = Express.Router();
const {UserModel} = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UniqueConstraintError } = require("sequelize");

router.post("/register", async(req, res) => {
    const { userName,
            password,
            email,
            maker,
            admin } = req.body.user;

    try {
        const newUser = await UserModel.create({
            userName,
            password: bcrypt.hashSync(password, 10),
            email,
            maker,
            admin
        });

        const token = jwt.sign(
            {id: newUser.id},
            process.env.JWT_SECRET,
            {
                expiresIn: 60*60*24
            }

        )

        res.status(201).json({
            message: "User registered",
            user: newUser,
            sessionToken: token
        })
    } catch(err){
        if(err instanceof UniqueConstraintError){
            res.status(409).json({
                message: "Email already in use"
            })
        }else{
            res.status(500).json({
                error: `Failed to register user: ${err}`
            })
        }
    }
})

router.post("/login", async (req,res) => {
    let {email, password} = req.body.user;

    try{
        const loginUser = await UserModel.findOne({
            where: {
                email
            }
        })

        if(loginUser){
            const passwordComparison = await bcrypt.compare(password, loginUser.password);

            if(passwordComparison){
                const token = jwt.sign(
                    {id: loginUser.id},
                    process.env.JWT_SECRET,
                    {expiresIn: 60*60*24}
                )

                res.status(200).json({
                    message: "User successfully logged in",
                    user: loginUser,
                    token
                })
            }else{
                res.status(401).json({
                    message: "Incorrect email or password"
                })
            }
        }else{
            res.status(401).json({
                message: "Email does exist"
            })
        }
    } catch (err){
        res.status(500).json({
            message: "Error logging in"
        })
    }
})

// router.get("/", async (req, res) => {
//     const { id } = req.user;
//     try {
//       const results = await UserModel.findOne({
//         where: {
//           id: id,
//         },
//       });
//       res.status(200).json(results);
//     } catch {
//       res.status(500).json({ error: err });
//     }
//   });

module.exports = router;