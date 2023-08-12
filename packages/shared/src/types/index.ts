export type AppDispatch = <t>(e: t) => any;

export enum Fetch {
    Idle = 'idle',
    Pending = 'pending',
    Fulfilled = 'fulfilled',
    Rejected = 'rejected',
}
