import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type MessageDocument = HydratedDocument<Message>;

@Schema({ timestamps: true })
export class Message {
  @Prop({
    type: String,
    default: () => {
      return uuidv4();
    },
  })
  message_id: string;

  @Prop({ isRequired: true })
  sender_id: string;

  @Prop({ isRequired: true })
  receiver_id: string;

  @Prop({ isRequired: true, enum: ['text', 'picture', 'emoji', 'link'] })
  message_type: string;

  @Prop()
  text: string;

  @Prop()
  url: string;

  @Prop({ default: false })
  is_read: boolean;

  @Prop()
  chat_room_id: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
