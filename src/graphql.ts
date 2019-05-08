
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface RegisterUserInput {
    mobile?: string;
    password: string;
}

export interface IMutation {
    register(mobile: string, password: string): UserResponse | Promise<UserResponse>;
}

export interface IQuery {
    login(mobile: string, password: string): UserResponse | Promise<UserResponse>;
    test(mobile: string, password: string): UserResponse | Promise<UserResponse>;
    temp__(): boolean | Promise<boolean>;
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

export interface UserResponse {
    code?: number;
    message?: string;
    result?: UserResult;
}

export interface UserResult {
    tokenInfo?: TokenInfo;
    user?: UserData;
}
