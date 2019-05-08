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
         * Calls CreateUser.
         * @param request CreateUserRequest message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        createUser(request: cqupt_user.CreateUserRequest, metadata?: grpc.Metadata): Observable<cqupt_user.StringDataResponse>;

        /**
         * Calls FindAllUsers.
         * @param request FindDataByPageRequest message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        findAllUsers(request: cqupt_user.FindDataByPageRequest, metadata?: grpc.Metadata): Observable<cqupt_user.FindAllUsersResponse>;
    }

    /** Properties of a CreateUserRequest. */
    export interface CreateUserRequest {

        /** CreateUserRequest createUserInput */
        createUserInput?: (cqupt_user.CreateUserRequest.CreateUserInput|null);
    }

    export namespace CreateUserRequest {

        /** Properties of a CreateUserInput. */
        export interface CreateUserInput {

            /** CreateUserInput mobile */
            mobile?: (string|null);

            /** CreateUserInput password */
            password?: (string|null);
        }
    }

    /** Properties of a StringDataResponse. */
    export interface StringDataResponse {

        /** StringDataResponse code */
        code?: (number|null);

        /** StringDataResponse message */
        message?: (string|null);

        /** StringDataResponse data */
        data?: (string|null);
    }

    /** Properties of a FindAllUsersResponse. */
    export interface FindAllUsersResponse {

        /** FindAllUsersResponse code */
        code?: (number|null);

        /** FindAllUsersResponse message */
        message?: (string|null);

        /** FindAllUsersResponse result */
        result?: (cqupt_user.UserData[]|null);
    }

    /** Properties of a FindDataByPageRequest. */
    export interface FindDataByPageRequest {

        /** FindDataByPageRequest pageNumber */
        pageNumber?: (number|null);

        /** FindDataByPageRequest pageSize */
        pageSize?: (number|null);
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
}
