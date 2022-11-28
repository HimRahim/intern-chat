import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChatRoomDocument = ChatRoom & Document;

@Schema({ timestamps: true })
export class ChatRoom {
  @Prop()
  chatRoomId: string;

  @Prop()
  chatRoomName: string;

  @Prop()
  chatRoomType: string;

  @Prop()
  chatRoomPicture: string;

  @Prop()
  member: string;

  @Prop()
  lastMessage: string;

}

export const ChatRoomSchema = SchemaFactory.createForClass(ChatRoom);