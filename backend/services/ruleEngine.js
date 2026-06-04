function evaluateClaim(data) {

    console.log("RULE ENGINE INPUT:");
    console.log(data);

    const reasons = [];

    const doctorRegPattern =
        /^[A-Z]{2}\/\d+\/\d{4}$/;

    // Only reject when explicitly false
    if (data.prescriptionPresent === false) {
        reasons.push("MISSING_DOCUMENTS");
    }

    if (data.billPresent === false) {
        reasons.push("MISSING_DOCUMENTS");
    }

    if (data.isLegible === false) {
        reasons.push("ILLEGIBLE_DOCUMENTS");
    }

    if (
        !data.doctorReg ||
        !doctorRegPattern.test(data.doctorReg)
    ) {
        reasons.push("DOCTOR_REG_INVALID");
    }

    if (
        data.claimAmount &&
        data.claimAmount < 500
    ) {
        reasons.push("BELOW_MIN_AMOUNT");
    }

    if (
        data.claimAmount &&
        data.claimAmount > 5000
    ) {
        reasons.push("PER_CLAIM_EXCEEDED");
    }

    return buildDecision(data, reasons);
}

function buildDecision(data, reasons) {

    if (reasons.length === 0) {
        return {
            decision: "APPROVED",
            approvedAmount: data.claimAmount || 0,
            rejection_reasons: [],
            confidence_score: 0.95
        };
    }

    if (
        reasons.includes("PER_CLAIM_EXCEEDED")
    ) {
        return {
            decision: "PARTIAL",
            approvedAmount: 5000,
            rejection_reasons: reasons,
            confidence_score: 0.90
        };
    }

    return {
        decision: "REJECTED",
        approvedAmount: 0,
        rejection_reasons: reasons,
        confidence_score: 0.95
    };
}

export default evaluateClaim;