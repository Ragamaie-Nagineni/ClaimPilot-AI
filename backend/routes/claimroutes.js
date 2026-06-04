import express from "express";
import evaluateClaim from "../services/ruleEngine.js"

const router = express.Router();

router.post("/analyze", (req, res) => {

    const extractedData = {
        doctorReg: "KA/45678/2015",
        claimAmount: 1500
    };

    const decision = evaluateClaim(extractedData);

    res.json(decision);
});

export default router;