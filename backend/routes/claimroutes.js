import express from "express";

import upload from "../middleware/upload.js";

import evaluateClaim from "../services/ruleEngine.js";
import { saveClaim } from "../services/claimService.js";
import { extractClaimDataFromImage, extractClaimDataFromText } from "../services/geminiService.js";
import { extractTextFromPDF } from "../services/pdfService.js";

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

                console.log("PDF TEXT:");
                console.log(text);

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

            console.log("RAW GEMINI OUTPUT:");
            console.log(geminiOutput);

            const cleaned =
                geminiOutput
                    .replace(/```json/g, "")
                    .replace(/```/g, "")
                    .trim();

            const extractedData =
                JSON.parse(cleaned);

            console.log("EXTRACTED DATA:");
            console.log(extractedData);

            const decision =
                evaluateClaim(
                    extractedData
                );

            console.log("DECISION:");
            console.log(decision);
            const claimId =
                await saveClaim(
                    extractedData,
                    decision
                );
            res.json({
                claimId,
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