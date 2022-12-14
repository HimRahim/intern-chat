import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { Message, MessageSchema } from './schema/message.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{  name:Message.name, schema: MessageSchema }])],
  controllers: [MessagesController],
  providers: [MessagesService]
})
export class MessagesModule {}
