export type IPatient = {
    id: number;
    susNumber: bigint;
    name: string;
    email: string;
    password: string;
    telephone: string;
    isAdmin: boolean;
    absentAt: Date;
};
