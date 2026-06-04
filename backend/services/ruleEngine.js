function evaluateClaim(data) {

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
    decision: "APPROVED"
  };
}

export default evaluateClaim;