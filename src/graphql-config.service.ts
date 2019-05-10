import { Inject, Injectable } from '@nestjs/common';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
// import * as GraphQLJSON from 'graphql-type-json';
import { join } from 'path';
// import { AuthService } from './auth/auth.service';

@Injectable()
export class GraphQLConfigService implements GqlOptionsFactory {
    // constructor(
    //     @Inject(AuthService) private readonly authService: AuthService
    // ) { }

    createGqlOptions(): GqlModuleOptions {
        return {
            typePaths: ['./**/*.types.graphql'],
            // resolvers: { JSON: GraphQLJSON },
            definitions: {
                path: join(process.cwd(), 'src/graphql.ts'),
            },
            context: async ({ req }) => {
                return { req };
            }
        };
    }
}