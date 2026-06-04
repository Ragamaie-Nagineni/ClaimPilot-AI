function evaluateClaim(data) {

    if (!data.prescriptionPresent) {
        return {
            decision: "REJECTED",
            reason: "MISSING_DOCUMENTS"
        };
    }

    if (!data.doctorReg) {
        return {
            decision: "REJECTED",
            reason: "DOCTOR_REG_INVALID"
        };
    }

    if (data.claimAmount < 500) {
        return {
            decision: "REJECTED",
            reason: "BELOW_MIN_AMOUNT"
        };
    }

    if (data.claimAmount > 5000) {
        return {
            decision: "REJECTED",
            reason: "PER_CLAIM_EXCEEDED"
        };
    }

    return {
        decision: "APPROVED",
        approvedAmount: data.claimAmount,
        confidenceScore: 0.95
    };
}

export default evaluateClaim;