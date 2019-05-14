
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface Card {
    stuNum?: string;
    user?: UserData;
    name?: string;
    stuId?: string;
    department?: Department;
    createdAt?: string;
    updatedAt?: string;
}

export interface CardWithStatus {
    stuNum?: string;
    user?: UserData;
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

export interface CreatDepartmentRes {
    code?: number;
    message?: string;
    department?: Department;
}

export interface Department {
    id?: string;
    name?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface FindAllDepartmentsRes {
    code?: number;
    message?: string;
    departments?: Department[];
}

export interface FindOneCardRes {
    code?: number;
    message?: string;
    card?: Card;
}

export interface LoginRes {
    code?: number;
    message?: string;
    user?: UserData;
    tokenInfo?: TokenInfo;
}

export interface LostCardRes {
    code?: number;
    message?: string;
    card?: CardWithStatus;
}

export interface IMutation {
    creatLostCard(stuNum: string, stuId?: string, name: string, userId?: string, departmentId?: string): LostCardRes | Promise<LostCardRes>;
    creatCard(stuNum: string, name: string, stuId?: string, userId?: string, departmentId?: string): CreatCardRes | Promise<CreatCardRes>;
    creatDepartment(name: string): CreatDepartmentRes | Promise<CreatDepartmentRes>;
}

export interface IQuery {
    findCardStatus(stuNum: string): LostCardRes | Promise<LostCardRes>;
    findOneCard(stuNum?: string, mobile?: string): FindOneCardRes | Promise<FindOneCardRes>;
    findAllDepartments(): FindAllDepartmentsRes | Promise<FindAllDepartmentsRes>;
    login(mobile: string, code: string): LoginRes | Promise<LoginRes>;
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
    id?: string;
    mobile?: string;
    createdAt?: string;
    updatedAt?: string;
    card?: Card;
}
