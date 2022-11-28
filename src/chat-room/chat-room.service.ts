import { Injectable } from '@nestjs/common';
import { CreateChatRoomDto } from './dto/create-chat-room.dto';
import { UpdateChatRoomDto } from './dto/update-chat-room.dto';
import { ChatRoom, ChatRoomDocument } from './schema/chat-room.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ChatRoomService {
  constructor( 
    @InjectModel('chatRoomId') private readonly chatRoomModel: Model<ChatRoomDocument>
    ) {}
 
    //Create room
  async createChatRoom(chatRoomId: ChatRoom): Promise<ChatRoom> {
    const newChatRoom = new this.chatRoomModel(chatRoomId)
    return newChatRoom.save();
  }

  async readChatRoom() {
    return this.chatRoomModel.find({}).exec();
  }

  async readChatRoomById(id: string) {
    return this.chatRoomModel.find({id}).exec()
  }

  // update
  async updateChatRoom(id: string, data: UpdateChatRoomDto): Promise<ChatRoom> {
    return this.chatRoomModel.findByIdAndUpdate(id, data, { new: true });
  }

  // delete
  async deleteChatRoom(id: string) {
    return this.chatRoomModel.findByIdAndRemove(id);
  }
}
