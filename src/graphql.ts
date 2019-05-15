
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
    status?: string;
    lostAt?: string;
    foundAt?: string;
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

export interface FindCardStatusRes {
    code?: number;
    message?: string;
    card?: CardWithStatus;
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

export interface IMutation {
    creatCard(stuNum: string, name: string, departmentId: string, stuId?: string, userId?: string): CreatCardRes | Promise<CreatCardRes>;
    creatDepartment(name: string): CreatDepartmentRes | Promise<CreatDepartmentRes>;
}

export interface IQuery {
    findCardStatus(stuNum?: string, stuId?: string, name?: string, userId?: string): FindCardStatusRes | Promise<FindCardStatusRes>;
    findOneCard(stuNum?: string, stuId?: string, name?: string, userId?: string): FindOneCardRes | Promise<FindOneCardRes>;
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
}
