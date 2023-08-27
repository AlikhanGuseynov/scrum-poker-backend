import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, CreateUserResponse, Room } from '../models/chat.interface';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('api/rooms')
  async getAllRooms(): Promise<Room[]> {
    return await this.userService.getRooms()
  }

  @Get('api/rooms/:room')
  async getRoom(@Param() params): Promise<Room> {
    const rooms = await this.userService.getRooms()
    const room = await this.userService.getRoomByName(params.room)
    return rooms[room]
  }

  @Post('api/create')
  async createUser(@Body() body: CreateUserDto): Promise<CreateUserResponse> {
    return this.userService.createUser(body)
  }
}
