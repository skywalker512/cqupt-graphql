import { Injectable } from '@nestjs/common';
import { Client, ClientGrpc, GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Injectable()
export class GrpcClientFactory {
    @Client(generateGrpcOptions('cqupt-user:50053', 'cqupt_user', 'cqupt_user.proto'))
    public readonly userModuleClient: ClientGrpc;

    @Client(generateGrpcOptions('cqupt-lf-be:50054', 'cqupt_lf_be', 'cqupt_lf_be.proto'))
    public readonly cquptModuleClient: ClientGrpc;

    @Client(generateGrpcOptions('cqupt-api:50055', 'cqupt_api', 'cqupt_api.proto'))
    public readonly apiModuleClient: ClientGrpc;
}

export function generateGrpcOptions(url: string, packageName: string, protoFileName: string): GrpcOptions {
    return {
        transport: Transport.GRPC,
        options: {
            url,
            package: packageName,
            protoPath: join(__dirname, 'protobufs/' + protoFileName),
            loader: {
                arrays: true
            }
        }
    };
}