export type Status = 'available' | 'onABreak' | 'offline';

export interface UserData {
    avatar?: string;
    name: string;
    email: string;
    phoneNumber?: string;
    title?: string;
}