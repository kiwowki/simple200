const express = require("express");
// 따로 빼려면 로우터 필요
const router = express.Router();

// 스키마 만들기
const { User } = require("../model/User.js");
const { Counter } = require("../model/Counter.js");

router.post("/join", (req, res) => {
    let temp = req.body;

    Counter.findOne({ name: "counter" })
        .then((result) => {
            temp.userNum = result.userNum;

            const userDate = new User(temp);
            userDate.save().then(() => {
                Counter.updateOne({ name: "counter" }, { $inc: { userNum: 1 } }).then(() => {
                    res.status(200).json({ success: true })
                })
            })
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false })
        })
})

module.exports = router;