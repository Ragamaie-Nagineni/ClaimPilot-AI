import express from "express";
import evaluateClaim from "../services/ruleEngine.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post(
    "/analyze",
    upload.array("documents"),
    (req, res) => {

        console.log(req.files);

        const extractedData = {
            doctorReg: "KA/45678/2015",
            claimAmount: 1500
        };

        const decision =
            evaluateClaim(extractedData);

        res.json(decision);
    }
);

export default router;