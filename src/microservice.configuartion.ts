import { MicroserviceOptions, Transport } from '@nestjs/microservices';

export const microserviceOptions:MicroserviceOptions={
transport:Transport.TCP,
options:{
  host:'localhost',
  port:1153
}
}