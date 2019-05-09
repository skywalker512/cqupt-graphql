
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface IMutation {
    register(mobile: string, password: string): UserRes | Promise<UserRes>;
}

export interface IQuery {
    login(mobile: string, password: string): UserRes | Promise<UserRes>;
    temp__(): boolean | Promise<boolean>;
}

export interface StringDataResponse {
    code?: number;
    message?: string;
    result?: string;
}

export interface TokenInfo {
    expiresIn?: number;
    accessToken?: string;
}

export interface UserData {
    id?: number;
    mobile?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface UserRes {
    code?: number;
    message?: string;
    result?: UserResult[];
}

export interface UserResult {
    tokenInfo?: TokenInfo;
    user?: UserData;
}
