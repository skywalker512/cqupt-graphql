import * as grpc from 'grpc';
import { Observable } from 'rxjs';
/** Namespace cqupt_user. */
export namespace cqupt_user {

    /** Contains all the RPC service clients. */
    export interface ClientFactory {

        /**
         * Returns the UserController service client.
         */
        getUserController(): cqupt_user.UserController;
    }

    /** Builder for an RPC service server. */
    export interface ServerBuilder {

        /**
         * Adds a UserController service implementation.
         * @param impl UserController service implementation
         */
        addUserController(impl: cqupt_user.UserController): cqupt_user.ServerBuilder;
    }

    /** Constructs a new UserController service. */
    export interface UserController {

        /**
         * Calls Register.
         * @param request RegisterReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        register(request: cqupt_user.RegisterReq, metadata?: grpc.Metadata): Observable<cqupt_user.UserRes>;

        /**
         * Calls Login.
         * @param request LoginReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        login(request: cqupt_user.LoginReq, metadata?: grpc.Metadata): Observable<cqupt_user.UserRes>;

        /**
         * Calls FindOneUser.
         * @param request FindOneUserReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        findOneUser(request: cqupt_user.FindOneUserReq, metadata?: grpc.Metadata): Observable<cqupt_user.FindOneUserRes>;

        /**
         * Calls FindAllUsers.
         * @param request FindDataByPageReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        findAllUsers(request: cqupt_user.FindDataByPageReq, metadata?: grpc.Metadata): Observable<cqupt_user.FindAllUsersRes>;
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
        id?: (number|null);

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

    /** Properties of a RegisterReq. */
    export interface RegisterReq {

        /** RegisterReq mobile */
        mobile?: (string|null);

        /** RegisterReq password */
        password?: (string|null);
    }

    /** Properties of a LoginReq. */
    export interface LoginReq {

        /** LoginReq mobile */
        mobile?: (string|null);

        /** LoginReq password */
        password?: (string|null);
    }

    /** Properties of a UserRes. */
    export interface UserRes {

        /** UserRes code */
        code?: (number|null);

        /** UserRes message */
        message?: (string|null);

        /** UserRes result */
        result?: (cqupt_user.UserRes.UserResult|null);
    }

    export namespace UserRes {

        /** Properties of a UserResult. */
        export interface UserResult {

            /** UserResult tokenInfo */
            tokenInfo?: (cqupt_user.TokenInfo|null);

            /** UserResult user */
            user?: (cqupt_user.UserData|null);
        }
    }

    /** Properties of a FindDataByPageReq. */
    export interface FindDataByPageReq {

        /** FindDataByPageReq pageNumber */
        pageNumber?: (number|null);

        /** FindDataByPageReq pageSize */
        pageSize?: (number|null);
    }

    /** Properties of a FindUserResult. */
    export interface FindUserResult {

        /** FindUserResult user */
        user?: (cqupt_user.UserData|null);
    }

    /** Properties of a FindAllUsersRes. */
    export interface FindAllUsersRes {

        /** FindAllUsersRes code */
        code?: (number|null);

        /** FindAllUsersRes message */
        message?: (string|null);

        /** FindAllUsersRes result */
        result?: (cqupt_user.FindUserResult[]|null);
    }

    /** Properties of a FindOneUserReq. */
    export interface FindOneUserReq {

        /** FindOneUserReq mobile */
        mobile?: (string|null);

        /** FindOneUserReq type */
        type?: (string|null);
    }

    /** Properties of a FindOneUserRes. */
    export interface FindOneUserRes {

        /** FindOneUserRes code */
        code?: (number|null);

        /** FindOneUserRes message */
        message?: (string|null);

        /** FindOneUserRes result */
        result?: (cqupt_user.FindUserResult|null);
    }
}
