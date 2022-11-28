import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ChatRoomService } from './chat-room.service';
import { UpdateChatRoomDto } from './dto/update-chat-room.dto';
import { ChatRoom } from './schema/chat-room.schema';

@Controller('chatroom')
export class ChatRoomController {
  constructor(private readonly chatRoomService: ChatRoomService) {}

  @Post()
  async createChatRoom(@Body() chatRoom: ChatRoom) {
    return this.chatRoomService.createChatRoom(chatRoom);
  }

  @Get()
  readChatRoom() {
    return this.chatRoomService.readChatRoom();
  }
  @Get(':id')
  readChatRoomById(@Param('id') id: string) {
    return this.chatRoomService.readChatRoomById(id);
  }

  @Put(':id')
  async updateChatRoom(@Param('id') id: string, @Body() updateData: UpdateChatRoomDto ): Promise<ChatRoom> {
    return this.chatRoomService.updateChatRoom(id, updateData);
  }

  @Delete(':id')
  async deleteChatRoom(@Param('id') id: string) {
    return this.chatRoomService.deleteChatRoom(id);
  }

}
