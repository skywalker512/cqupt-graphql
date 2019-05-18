import * as grpc from 'grpc';
import { Observable } from 'rxjs';
/** Namespace cqupt_api. */
export namespace cqupt_api {

    /** Contains all the RPC service clients. */
    export interface ClientFactory {

        /**
         * Returns the BaiduocrController service client.
         */
        getBaiduocrController(): cqupt_api.BaiduocrController;

        /**
         * Returns the QcloudsmsController service client.
         */
        getQcloudsmsController(): cqupt_api.QcloudsmsController;
    }

    /** Builder for an RPC service server. */
    export interface ServerBuilder {

        /**
         * Adds a BaiduocrController service implementation.
         * @param impl BaiduocrController service implementation
         */
        addBaiduocrController(impl: cqupt_api.BaiduocrController): cqupt_api.ServerBuilder;

        /**
         * Adds a QcloudsmsController service implementation.
         * @param impl QcloudsmsController service implementation
         */
        addQcloudsmsController(impl: cqupt_api.QcloudsmsController): cqupt_api.ServerBuilder;
    }

    /** Constructs a new BaiduocrController service. */
    export interface BaiduocrController {

        /**
         * Calls GetAuthorization.
         * @param request GetAuthorizationReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        getAuthorization(request: cqupt_api.GetAuthorizationReq, metadata?: grpc.Metadata): Observable<cqupt_api.GetAuthorizationRes>;
    }

    /** Properties of a GetAuthorizationReq. */
    export interface GetAuthorizationReq {

        /** GetAuthorizationReq method */
        method?: (string|null);

        /** GetAuthorizationReq uri */
        uri?: (string|null);
    }

    /** Properties of a GetAuthorizationRes. */
    export interface GetAuthorizationRes {

        /** GetAuthorizationRes code */
        code?: (number|null);

        /** GetAuthorizationRes message */
        message?: (string|null);

        /** GetAuthorizationRes authorization */
        authorization?: (string|null);
    }

    /** Constructs a new QcloudsmsController service. */
    export interface QcloudsmsController {

        /**
         * Calls SendVerifyCode.
         * @param request SendVerifyCodeReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        sendVerifyCode(request: cqupt_api.SendVerifyCodeReq, metadata?: grpc.Metadata): Observable<cqupt_api.SendVerifyCodeRes>;

        /**
         * Calls ValidateCode.
         * @param request ValidateCodeReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        validateCode(request: cqupt_api.ValidateCodeReq, metadata?: grpc.Metadata): Observable<cqupt_api.ValidateCodeRes>;
    }

    /** Properties of a SendVerifyCodeReq. */
    export interface SendVerifyCodeReq {

        /** SendVerifyCodeReq mobile */
        mobile?: (string|null);
    }

    /** Properties of a SendVerifyCodeRes. */
    export interface SendVerifyCodeRes {

        /** SendVerifyCodeRes code */
        code?: (number|null);

        /** SendVerifyCodeRes message */
        message?: (string|null);
    }

    /** Properties of a ValidateCodeReq. */
    export interface ValidateCodeReq {

        /** ValidateCodeReq mobile */
        mobile?: (string|null);

        /** ValidateCodeReq code */
        code?: (string|null);
    }

    /** Properties of a ValidateCodeRes. */
    export interface ValidateCodeRes {

        /** ValidateCodeRes code */
        code?: (number|null);

        /** ValidateCodeRes message */
        message?: (string|null);
    }
}

/** Namespace cqupt_lf_be. */
export namespace cqupt_lf_be {

    /** Contains all the RPC service clients. */
    export interface ClientFactory {

        /**
         * Returns the CardController service client.
         */
        getCardController(): cqupt_lf_be.CardController;

        /**
         * Returns the LocationController service client.
         */
        getLocationController(): cqupt_lf_be.LocationController;
    }

    /** Builder for an RPC service server. */
    export interface ServerBuilder {

        /**
         * Adds a CardController service implementation.
         * @param impl CardController service implementation
         */
        addCardController(impl: cqupt_lf_be.CardController): cqupt_lf_be.ServerBuilder;

        /**
         * Adds a LocationController service implementation.
         * @param impl LocationController service implementation
         */
        addLocationController(impl: cqupt_lf_be.LocationController): cqupt_lf_be.ServerBuilder;
    }

    /** Constructs a new CardController service. */
    export interface CardController {

        /**
         * Calls FindCardStatus.
         * @param request FindCardStatusReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        findCardStatus(request: cqupt_lf_be.FindCardStatusReq, metadata?: grpc.Metadata): Observable<cqupt_lf_be.FindCardStatusRes>;

        /**
         * Calls ChangeCardStatus.
         * @param request ChangeCardStatusReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        changeCardStatus(request: cqupt_lf_be.ChangeCardStatusReq, metadata?: grpc.Metadata): Observable<cqupt_lf_be.ChangeCardStatusRes>;
    }

    /** Properties of a CardWithStatus. */
    export interface CardWithStatus {

        /** CardWithStatus stuNum */
        stuNum?: (string|null);

        /** CardWithStatus status */
        status?: (string|null);

        /** CardWithStatus lostAt */
        lostAt?: (string|null);

        /** CardWithStatus foundAt */
        foundAt?: (string|null);

        /** CardWithStatus foundLocation */
        foundLocation?: (cqupt_lf_be.Location|null);
    }

    /** Properties of a FindCardStatusReq. */
    export interface FindCardStatusReq {

        /** FindCardStatusReq stuNum */
        stuNum?: (string|null);

        /** FindCardStatusReq stuId */
        stuId?: (string|null);

        /** FindCardStatusReq name */
        name?: (string|null);

        /** FindCardStatusReq userId */
        userId?: (string|null);
    }

    /** Properties of a FindCardStatusRes. */
    export interface FindCardStatusRes {

        /** FindCardStatusRes code */
        code?: (number|null);

        /** FindCardStatusRes message */
        message?: (string|null);

        /** FindCardStatusRes card */
        card?: (cqupt_lf_be.CardWithStatus|null);
    }

    /** Properties of a ChangeCardStatusReq. */
    export interface ChangeCardStatusReq {

        /** ChangeCardStatusReq stuNum */
        stuNum?: (string|null);

        /** ChangeCardStatusReq status */
        status?: (string|null);

        /** ChangeCardStatusReq foundByUserId */
        foundByUserId?: (string|null);

        /** ChangeCardStatusReq locationId */
        locationId?: (string|null);
    }

    /** Properties of a ChangeCardStatusRes. */
    export interface ChangeCardStatusRes {

        /** ChangeCardStatusRes code */
        code?: (number|null);

        /** ChangeCardStatusRes message */
        message?: (string|null);

        /** ChangeCardStatusRes card */
        card?: (cqupt_lf_be.CardWithStatus|null);
    }

    /** Constructs a new LocationController service. */
    export interface LocationController {

        /**
         * Calls CreatLocation.
         * @param request CreatLocationReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        creatLocation(request: cqupt_lf_be.CreatLocationReq, metadata?: grpc.Metadata): Observable<cqupt_lf_be.CreatLocationRes>;

        /**
         * Calls CreatLocationTag.
         * @param request CreatLocationTagReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        creatLocationTag(request: cqupt_lf_be.CreatLocationTagReq, metadata?: grpc.Metadata): Observable<cqupt_lf_be.CreatLocationTagRes>;

        /**
         * Calls FindAllLocationWithTags.
         * @param request FindAllLocationWithTagsReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        findAllLocationWithTags(request: cqupt_lf_be.FindAllLocationWithTagsReq, metadata?: grpc.Metadata): Observable<cqupt_lf_be.FindAllLocationWithTagsRes>;
    }

    /** Properties of a Location. */
    export interface Location {

        /** Location id */
        id?: (string|null);

        /** Location name */
        name?: (string|null);
    }

    /** Properties of a LocationTag. */
    export interface LocationTag {

        /** LocationTag id */
        id?: (string|null);

        /** LocationTag name */
        name?: (string|null);
    }

    /** Properties of a LocationWithTags. */
    export interface LocationWithTags {

        /** LocationWithTags id */
        id?: (string|null);

        /** LocationWithTags name */
        name?: (string|null);

        /** LocationWithTags locations */
        locations?: (cqupt_lf_be.Location[]|null);
    }

    /** Properties of a CreatLocationReq. */
    export interface CreatLocationReq {

        /** CreatLocationReq name */
        name?: (string|null);

        /** CreatLocationReq tagId */
        tagId?: (string|null);
    }

    /** Properties of a CreatLocationRes. */
    export interface CreatLocationRes {

        /** CreatLocationRes code */
        code?: (number|null);

        /** CreatLocationRes message */
        message?: (string|null);

        /** CreatLocationRes location */
        location?: (cqupt_lf_be.Location|null);
    }

    /** Properties of a CreatLocationTagReq. */
    export interface CreatLocationTagReq {

        /** CreatLocationTagReq name */
        name?: (string|null);
    }

    /** Properties of a CreatLocationTagRes. */
    export interface CreatLocationTagRes {

        /** CreatLocationTagRes code */
        code?: (number|null);

        /** CreatLocationTagRes message */
        message?: (string|null);

        /** CreatLocationTagRes locationTag */
        locationTag?: (cqupt_lf_be.LocationTag|null);
    }

    /** Properties of a FindAllLocationWithTagsReq. */
    export interface FindAllLocationWithTagsReq {
    }

    /** Properties of a FindAllLocationWithTagsRes. */
    export interface FindAllLocationWithTagsRes {

        /** FindAllLocationWithTagsRes code */
        code?: (number|null);

        /** FindAllLocationWithTagsRes message */
        message?: (string|null);

        /** FindAllLocationWithTagsRes locationWithTags */
        locationWithTags?: (cqupt_lf_be.LocationWithTags[]|null);
    }
}

/** Namespace cqupt_user. */
export namespace cqupt_user {

    /** Contains all the RPC service clients. */
    export interface ClientFactory {

        /**
         * Returns the UserController service client.
         */
        getUserController(): cqupt_user.UserController;

        /**
         * Returns the DepartmentController service client.
         */
        getDepartmentController(): cqupt_user.DepartmentController;

        /**
         * Returns the CardController service client.
         */
        getCardController(): cqupt_user.CardController;
    }

    /** Builder for an RPC service server. */
    export interface ServerBuilder {

        /**
         * Adds a UserController service implementation.
         * @param impl UserController service implementation
         */
        addUserController(impl: cqupt_user.UserController): cqupt_user.ServerBuilder;

        /**
         * Adds a DepartmentController service implementation.
         * @param impl DepartmentController service implementation
         */
        addDepartmentController(impl: cqupt_user.DepartmentController): cqupt_user.ServerBuilder;

        /**
         * Adds a CardController service implementation.
         * @param impl CardController service implementation
         */
        addCardController(impl: cqupt_user.CardController): cqupt_user.ServerBuilder;
    }

    /** Constructs a new UserController service. */
    export interface UserController {

        /**
         * Calls CreatUser.
         * @param request CreatUserReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        creatUser(request: cqupt_user.CreatUserReq, metadata?: grpc.Metadata): Observable<cqupt_user.CreatUserRes>;

        /**
         * Calls Login.
         * @param request LoginReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        login(request: cqupt_user.LoginReq, metadata?: grpc.Metadata): Observable<cqupt_user.LoginRes>;

        /**
         * Calls FindOneUser.
         * @param request FindOneUserReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        findOneUser(request: cqupt_user.FindOneUserReq, metadata?: grpc.Metadata): Observable<cqupt_user.FindOneUserRes>;

        /**
         * Calls FindAllUsers.
         * @param request FindAllUsersReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        findAllUsers(request: cqupt_user.FindAllUsersReq, metadata?: grpc.Metadata): Observable<cqupt_user.FindAllUsersRes>;
    }

    /** Properties of a StringDataResponse. */
    export interface StringDataResponse {

        /** StringDataResponse code */
        code?: (number|null);

        /** StringDataResponse message */
        message?: (string|null);

        /** StringDataResponse result */
        result?: (string|null);
    }

    /** Properties of a UserData. */
    export interface UserData {

        /** UserData id */
        id?: (string|null);

        /** UserData mobile */
        mobile?: (string|null);

        /** UserData createdAt */
        createdAt?: (string|null);

        /** UserData updatedAt */
        updatedAt?: (string|null);
    }

    /** Properties of a TokenInfo. */
    export interface TokenInfo {

        /** TokenInfo expiresIn */
        expiresIn?: (number|null);

        /** TokenInfo accessToken */
        accessToken?: (string|null);
    }

    /** Properties of a CreatUserReq. */
    export interface CreatUserReq {

        /** CreatUserReq data */
        data?: (cqupt_user.UserData|null);
    }

    /** Properties of a CreatUserRes. */
    export interface CreatUserRes {

        /** CreatUserRes code */
        code?: (number|null);

        /** CreatUserRes message */
        message?: (string|null);

        /** CreatUserRes user */
        user?: (cqupt_user.UserData|null);
    }

    /** Properties of a LoginReq. */
    export interface LoginReq {

        /** LoginReq data */
        data?: (cqupt_user.UserData|null);

        /** LoginReq code */
        code?: (string|null);
    }

    /** Properties of a LoginRes. */
    export interface LoginRes {

        /** LoginRes code */
        code?: (number|null);

        /** LoginRes message */
        message?: (string|null);

        /** LoginRes user */
        user?: (cqupt_user.UserData|null);

        /** LoginRes tokenInfo */
        tokenInfo?: (cqupt_user.TokenInfo|null);
    }

    /** Properties of a FindOneUserReq. */
    export interface FindOneUserReq {

        /** FindOneUserReq data */
        data?: (cqupt_user.UserData|null);
    }

    /** Properties of a FindOneUserRes. */
    export interface FindOneUserRes {

        /** FindOneUserRes code */
        code?: (number|null);

        /** FindOneUserRes message */
        message?: (string|null);

        /** FindOneUserRes user */
        user?: (cqupt_user.UserData|null);
    }

    /** Properties of a FindAllUsersReq. */
    export interface FindAllUsersReq {

        /** FindAllUsersReq pageNumber */
        pageNumber?: (number|null);

        /** FindAllUsersReq pageSize */
        pageSize?: (number|null);
    }

    /** Properties of a FindAllUsersRes. */
    export interface FindAllUsersRes {

        /** FindAllUsersRes code */
        code?: (number|null);

        /** FindAllUsersRes message */
        message?: (string|null);

        /** FindAllUsersRes user */
        user?: (cqupt_user.UserData[]|null);
    }

    /** Constructs a new DepartmentController service. */
    export interface DepartmentController {

        /**
         * Calls CreatDepartment.
         * @param request CreatDepartmentReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        creatDepartment(request: cqupt_user.CreatDepartmentReq, metadata?: grpc.Metadata): Observable<cqupt_user.CreatDepartmentRes>;

        /**
         * Calls FindAllDepartments.
         * @param request FindAllDepartmentsReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        findAllDepartments(request: cqupt_user.FindAllDepartmentsReq, metadata?: grpc.Metadata): Observable<cqupt_user.FindAllDepartmentsRes>;
    }

    /** Properties of a Department. */
    export interface Department {

        /** Department id */
        id?: (string|null);

        /** Department name */
        name?: (string|null);

        /** Department createdAt */
        createdAt?: (string|null);

        /** Department updatedAt */
        updatedAt?: (string|null);
    }

    /** Properties of a CreatDepartmentReq. */
    export interface CreatDepartmentReq {

        /** CreatDepartmentReq name */
        name?: (string|null);
    }

    /** Properties of a CreatDepartmentRes. */
    export interface CreatDepartmentRes {

        /** CreatDepartmentRes code */
        code?: (number|null);

        /** CreatDepartmentRes message */
        message?: (string|null);

        /** CreatDepartmentRes department */
        department?: (cqupt_user.Department|null);
    }

    /** Properties of a FindAllDepartmentsReq. */
    export interface FindAllDepartmentsReq {

        /** FindAllDepartmentsReq pageNumber */
        pageNumber?: (number|null);

        /** FindAllDepartmentsReq pageSize */
        pageSize?: (number|null);
    }

    /** Properties of a FindAllDepartmentsRes. */
    export interface FindAllDepartmentsRes {

        /** FindAllDepartmentsRes code */
        code?: (number|null);

        /** FindAllDepartmentsRes message */
        message?: (string|null);

        /** FindAllDepartmentsRes departments */
        departments?: (cqupt_user.Department[]|null);
    }

    /** Constructs a new CardController service. */
    export interface CardController {

        /**
         * Calls CreatCard.
         * @param request CreatCardReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        creatCard(request: cqupt_user.CreatCardReq, metadata?: grpc.Metadata): Observable<cqupt_user.CreatCardRes>;

        /**
         * Calls FindOneCard.
         * @param request FindOneCardReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        findOneCard(request: cqupt_user.FindOneCardReq, metadata?: grpc.Metadata): Observable<cqupt_user.FindOneCardRes>;
    }

    /** Properties of a Card. */
    export interface Card {

        /** Card stuNum */
        stuNum?: (string|null);

        /** Card user */
        user?: (cqupt_user.UserData|null);

        /** Card name */
        name?: (string|null);

        /** Card stuId */
        stuId?: (number|null);

        /** Card createdAt */
        createdAt?: (string|null);

        /** Card updatedAt */
        updatedAt?: (string|null);

        /** Card department */
        department?: (cqupt_user.Department|null);
    }

    /** Properties of a CreatCardReq. */
    export interface CreatCardReq {

        /** CreatCardReq stuNum */
        stuNum?: (string|null);

        /** CreatCardReq stuId */
        stuId?: (string|null);

        /** CreatCardReq name */
        name?: (string|null);

        /** CreatCardReq userId */
        userId?: (string|null);

        /** CreatCardReq departmentId */
        departmentId?: (string|null);
    }

    /** Properties of a CreatCardRes. */
    export interface CreatCardRes {

        /** CreatCardRes code */
        code?: (number|null);

        /** CreatCardRes message */
        message?: (string|null);

        /** CreatCardRes card */
        card?: (cqupt_user.Card|null);
    }

    /** Properties of a FindOneCardReq. */
    export interface FindOneCardReq {

        /** FindOneCardReq stuNum */
        stuNum?: (string|null);

        /** FindOneCardReq stuId */
        stuId?: (string|null);

        /** FindOneCardReq name */
        name?: (string|null);

        /** FindOneCardReq userId */
        userId?: (string|null);
    }

    /** Properties of a FindOneCardRes. */
    export interface FindOneCardRes {

        /** FindOneCardRes code */
        code?: (number|null);

        /** FindOneCardRes message */
        message?: (string|null);

        /** FindOneCardRes card */
        card?: (cqupt_user.Card|null);
    }
}
