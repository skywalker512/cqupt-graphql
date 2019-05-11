
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface Card {
    stuNum?: string;
    user?: string;
    name?: string;
    stuId?: string;
    createdAt?: string;
    updatedAt?: string;
    status?: string;
    LostTime?: string;
    foundTime?: string;
}

export interface CreatCardRes {
    code?: number;
    message?: string;
    card?: Card;
}

export interface DataRes {
    code?: number;
    message?: string;
}

export interface Department {
    id?: string;
    name?: string;
}

export interface FindAllDepartmentsRes {
    code?: number;
    message?: string;
    departments?: Department[];
}

export interface LostCardRes {
    code?: number;
    message?: string;
    card?: Card;
}

export interface IMutation {
    creatLostCard(stuNum: string, stuId?: string, name: string, userId?: string, departmentId?: string): LostCardRes | Promise<LostCardRes>;
    creatCard(stuNum: string, stuId?: string, name: string, userId?: string, departmentId?: string): DataRes | Promise<DataRes>;
    creatDepartment(name: string): DataRes | Promise<DataRes>;
}

export interface IQuery {
    findCard(stuNum: string): LostCardRes | Promise<LostCardRes>;
    login(mobile: string, code: string): UserRes | Promise<UserRes>;
    sendCode(mobile: string): SendCodeRes | Promise<SendCodeRes>;
    findAllDepartments(): findAllDepartmentsRes | Promise<findAllDepartmentsRes>;
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
    id?: string;
    mobile?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface UserRes {
    code?: number;
    message?: string;
    tokenInfo?: TokenInfo;
    user?: UserData;
}
