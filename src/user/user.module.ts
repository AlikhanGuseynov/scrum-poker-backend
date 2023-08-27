import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { ChatGateway } from '../gateway/chat.gateway';

@Module({
  controllers: [UserController],
  providers: [UserService, ChatGateway],
  exports: [UserService],
})
export class UserModule {}
