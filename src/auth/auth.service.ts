import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import { cqupt_user } from '../grpc/generated';
import { GrpcClientFactory } from '../grpc/grpc.client-factory';
import { AuthenticationError } from 'apollo-server-core';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService implements OnModuleInit {
  private userService: cqupt_user.UserController
  constructor(
    @Inject(GrpcClientFactory) private readonly grpcClientFactory: GrpcClientFactory
  ) { }
  onModuleInit() {
    this.userService = this.grpcClientFactory.userModuleClient.getService('UserController')
  }

  async validateUser(req: any) {
    /**
     * whitelist
     */
    if (req.body && (['IntrospectionQuery', 'sayHello', 'login', 'adminLogin', 'register'].some(item => req.body.query.includes(item)))) {
      return;
    }

    let token = req.headers.authorization as string;
    if (!token) {
      throw new AuthenticationError('请求头中应该有 Authorization 字段');
    }

    if (token.slice(0, 6) === 'Bearer') {
      token = token.slice(7);
    } else {
      throw new AuthenticationError('请求头的 Authorization 字段的前缀应该是 Bearer');
    }

    try {
      const decodedToken = <{ loginName: string }>jwt.verify(token, 'secretKey');
    } catch (error) {
      if (error instanceof jwt.JsonWebTokenError) {
        throw new AuthenticationError('Authorization code 出错');
      }
      if (error instanceof jwt.TokenExpiredError) {
        throw new AuthenticationError('Authorization code 过期');
      }
    }
  }
}