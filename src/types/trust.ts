export interface TrustMetric {
    label: string;
    value: number;
    max: number;
}

export interface TrustScoreHistory {
    timestamp: number;
    score: number;
}

export interface TrustFactors {
    paymentConsistency: number;
    relationshipLongevity: number;
    participationReliability: number;
    peerEndorsements: number;
}
