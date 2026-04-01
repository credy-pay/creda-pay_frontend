export interface IdentityProfile {
  address: string;
  username: string;
  avatarUrl?: string;
  bio?: string;
  trustScore: number;
  verificationStatus: 'unverified' | 'pending' | 'verified';
  createdAt: number;
}

export interface Achievement {
  id: string;
  label: string;
  description: string;
  imageUrl: string;
  earnedAt: number;
}
