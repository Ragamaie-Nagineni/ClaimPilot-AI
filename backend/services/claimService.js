import pool from "../db/db.js";

export async function saveClaim(
    extractedData,
    decision
) {

    const claimId =
        "CLM_" +
        Date.now();

    console.log("SAVING CLAIM...");
console.log(claimId);

    await pool.query(

        `
        INSERT INTO claims
        (
            claim_id,
            patient_name,
            doctor_name,
            diagnosis,
            claim_amount,
            decision,
            approved_amount
        )
        VALUES
        (
            $1,$2,$3,$4,$5,$6,$7
        )
        `,

        [
            claimId,
            extractedData.patientName,
            extractedData.doctorName,
            extractedData.diagnosis,
            extractedData.claimAmount,
            decision.decision,
            decision.approvedAmount
        ]
    );
    console.log("CLAIM SAVED");

    return claimId;
}