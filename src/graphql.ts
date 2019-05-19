
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
    foundLocation?: Location;
}

export interface ChangeCardStatusRes {
    code?: number;
    message?: string;
    card?: CardWithStatus;
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

export interface CreatLocationRes {
    code?: number;
    message?: string;
    location?: Location;
}

export interface CreatLocationTagRes {
    code?: number;
    message?: string;
    locationTag?: LocationTag;
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

export interface FindAllLocationWithTagsRes {
    code?: number;
    message?: string;
    locationWithTags?: LocationWithTags[];
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

export interface GetAuthorizationRes {
    code?: number;
    message?: string;
    authorization?: string;
}

export interface Location {
    id?: string;
    name?: string;
}

export interface LocationTag {
    id?: string;
    name?: string;
}

export interface LocationWithTags {
    id?: string;
    name?: string;
    locations?: Location[];
}

export interface LoginRes {
    code?: number;
    message?: string;
    user?: UserData;
    tokenInfo?: TokenInfo;
}

export interface IMutation {
    creatLocation(name: string, tagId: string): CreatLocationRes | Promise<CreatLocationRes>;
    creatLocationTag(name: string): CreatLocationTagRes | Promise<CreatLocationTagRes>;
    changeCardStatus(stuNum?: string, status?: string, foundByUserId?: string, locationId?: string): ChangeCardStatusRes | Promise<ChangeCardStatusRes>;
    creatCard(stuNum: string, name: string, departmentId: string, stuId?: string, userId?: string): CreatCardRes | Promise<CreatCardRes>;
    creatDepartment(name: string): CreatDepartmentRes | Promise<CreatDepartmentRes>;
}

export interface IQuery {
    getAuthorization(): GetAuthorizationRes | Promise<GetAuthorizationRes>;
    sendVerifyCode(mobile: string): SendVerifyCodeRes | Promise<SendVerifyCodeRes>;
    findAllLocationWithTags(): FindAllLocationWithTagsRes | Promise<FindAllLocationWithTagsRes>;
    findCardStatus(stuNum?: string, stuId?: string, name?: string, userId?: string): FindCardStatusRes | Promise<FindCardStatusRes>;
    findOneCard(stuNum?: string, stuId?: string, name?: string, userId?: string): FindOneCardRes | Promise<FindOneCardRes>;
    findAllDepartments(): FindAllDepartmentsRes | Promise<FindAllDepartmentsRes>;
    login(mobile: string, code: string): LoginRes | Promise<LoginRes>;
    superAdminLogin(mobile: string, code: string): SuperAdminLoginRes | Promise<SuperAdminLoginRes>;
    sendCode(mobile: string): SendCodeRes | Promise<SendCodeRes>;
    temp__(): boolean | Promise<boolean>;
}

export interface SendCodeRes {
    code?: number;
    message?: string;
}

export interface SendVerifyCodeRes {
    code?: number;
    message?: string;
}

export interface StringDataResponse {
    code?: number;
    message?: string;
    result?: string;
}

export interface SuperAdminLoginRes {
    code?: number;
    message?: string;
    user?: UserData;
    tokenInfo?: TokenInfo;
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
