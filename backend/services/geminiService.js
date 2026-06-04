import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash"
});

async function retryGemini(fn, retries = 3) {

    for (let i = 0; i < retries; i++) {

        try {
            return await fn();

        } catch (err) {

            if (
                err.status === 503 &&
                i < retries - 1
            ) {

                console.log(
                    `Gemini busy. Retry ${i + 1}...`
                );

                await new Promise(
                    resolve =>
                        setTimeout(resolve, 2000)
                );

                continue;
            }

            throw err;
        }
    }
}

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
You are an insurance claim extraction system.

Analyze the uploaded medical document.

Extract ALL available information.

Return ONLY valid JSON.

{
  "doctorReg":"",
  "doctorName":"",
  "patientName":"",
  "diagnosis":"",
  "claimAmount":0,
  "hospital":"",
  "treatmentDate":"",

  "prescriptionDate":"",
  "billDate":"",

  "serviceType":"",

  "prescriptionPresent":false,
  "billPresent":false,
  "isLegible":true,
  "preAuthPresent":false,

  "medicallyNecessary":true,
  "cosmeticProcedure":false,
  "experimentalTreatment":false
}

Rules:

Rules:

1. doctorReg = doctor's registration number

2. claimAmount = total bill amount

3. medicallyNecessary =
true if treatment appears medically required

4. cosmeticProcedure =
true if treatment is cosmetic

5. experimentalTreatment =
true if treatment appears experimental

6. prescriptionPresent =
true if prescription exists

7. billPresent =
true if bill/invoice exists

Return ONLY JSON.
No markdown.
No explanation.
`;

    const result =
    await model.generateContent(
        prompt + "\n\n" + text
    );
    return result.response.text();
}