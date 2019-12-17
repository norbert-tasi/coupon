export interface Coupon {
    code: string;
    activated: Date;
}

export interface LatestCoupon {
    valid: boolean;
    activated: Date;
    msg: string;
}
