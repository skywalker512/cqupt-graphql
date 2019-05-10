import { CanActivate, ExecutionContext, Injectable, Inject } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject(AuthService) private readonly authService: AuthService
  ) { }
  async canActivate(context: ExecutionContext):  Promise<boolean> {
    const gqlCtx = GqlExecutionContext.create(context);
    const req = gqlCtx.getContext().req

    const user = await this.authService.validateUser(req)
    if(user) {
      return true
    } else {
      return false
    }
  }
}
