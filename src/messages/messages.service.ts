import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message, MessageDocument } from './schema/message.schema';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
  ) {}

  async create(createMessageDto: CreateMessageDto): Promise<Message> {
    let createMessage = new this.messageModel(createMessageDto);
    return createMessage.save();
  }

  async findAll(): Promise<Message[]> {
    return this.messageModel.find().exec();
  }

  async findOne(id: string): Promise<Message> {
    return this.messageModel.findOne({ id });
  }

  async update(id: string, updateMessageDto: UpdateMessageDto) {
    return this.messageModel.updateOne({ id }, updateMessageDto);
  }

  async remove(id: string) {
    return this.messageModel.deleteOne({ id });
  }

  async findMessageByMessageId(messageId: string): Promise<Message> {
    return this.messageModel.findOne({ messageId }).exec();
  }

  async removeMessageByMessageId(messageId: string): Promise<any> {
    return this.messageModel.deleteOne({ messageId });
  }

  async findMessageByRoomId(roomId:string): Promise<Message[]> {
    return this.messageModel.find({ roomId }).exec();
  }

  async removeMessageByRoomId(roomId: string): Promise<any> {
    return this.messageModel.deleteMany({ roomId });
  }
}
