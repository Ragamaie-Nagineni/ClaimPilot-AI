import express from "express";

import upload from "../middleware/upload.js";

import evaluateClaim from "../services/ruleEngine.js";

import {
    extractClaimDataFromImage,
    extractClaimDataFromText
} from "../services/geminiService.js";

import {
    extractTextFromPDF
} from "../services/pdfService.js";

const router = express.Router();

router.post(
    "/analyze",
    upload.array("documents"),
    async (req, res) => {

        try {

            const file = req.files[0];

            let geminiOutput;

            if (
                file.mimetype ===
                "application/pdf"
            ) {

                const text =
                    await extractTextFromPDF(file);

                geminiOutput =
                    await extractClaimDataFromText(
                        text
                    );

            } else if (
                file.mimetype.startsWith("image/")
            ) {

                geminiOutput =
                    await extractClaimDataFromImage(
                        file
                    );

            } else {

                return res.status(400).json({
                    error: "Unsupported file type"
                });
            }

            const cleaned =
                geminiOutput
                    .replace(/```json/g, "")
                    .replace(/```/g, "")
                    .trim();

            const extractedData =
                JSON.parse(cleaned);

            const decision =
                evaluateClaim(
                    extractedData
                );

            res.json({
                extractedData,
                decision
            });

        } catch (error) {

            console.error(error);

            res.status(500).json({
                error: error.message
            });
        }
    }
);

export default router;