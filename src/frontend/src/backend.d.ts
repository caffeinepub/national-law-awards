import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Nomination {
    organizationName: string;
    submitterName: string;
    awardCategory: string;
    timestamp: Time;
    nomineeDescription: string;
}
export type Time = bigint;
export interface backendInterface {
    getNominationCount(): Promise<bigint>;
    getNominations(): Promise<Array<Nomination>>;
    submitNomination(submitterName: string, organizationName: string, awardCategory: string, nomineeDescription: string): Promise<void>;
}
