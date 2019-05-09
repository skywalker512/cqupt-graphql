
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface IQuery {
    login(mobile: string, code: string): UserRes | Promise<UserRes>;
    sendCode(mobile: string): SendCodeRes | Promise<SendCodeRes>;
    temp__(): boolean | Promise<boolean>;
}

export interface SendCodeRes {
    code?: number;
    message?: string;
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
    result?: UserResult;
}

export interface UserResult {
    tokenInfo?: TokenInfo;
    user?: UserData;
}
