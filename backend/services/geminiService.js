import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash"
});

export async function extractClaimDataFromImage(file) {

    const imagePart = {
        inlineData: {
            data: file.buffer.toString("base64"),
            mimeType: file.mimetype
        }
    };

    const prompt = `
Extract claim information.

Return ONLY JSON.

{
  "doctorReg":"",
  "doctorName":"",
  "diagnosis":"",
  "claimAmount":0,
  "hospital":"",
  "patientName":"",
  "treatmentDate":"",
  "prescriptionPresent":true
}
`;

    const result = await model.generateContent([
        prompt,
        imagePart
    ]);

    return result.response.text();
}

export async function extractClaimDataFromText(text) {

    const prompt = `
Extract claim information.

Return ONLY JSON.

{
  "doctorReg":"",
  "doctorName":"",
  "diagnosis":"",
  "claimAmount":0,
  "hospital":"",
  "patientName":"",
  "treatmentDate":"",
  "prescriptionPresent":true
}

Document:

${text}
`;

    const result =
        await model.generateContent(prompt);

    return result.response.text();
}