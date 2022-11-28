import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ChatRoomModule } from './chat-room/chat-room.module';
import { MessagesModule } from './messages/messages.module';
import { UsersModule } from './users/users.module';

const DBURL =
  'mongodb+srv://him_rahim:LleGuKDmSVRWusP3@cluster0.cgxqn.mongodb.net/test';

// mongodb+srv://him_rahim:LleGuKDmSVRWusP3@cluster0.cgxqn.mongodb.net/test
// mongodb+srv://trainee_api:7YrYxsBzzqFTzM8j@fintechinno-service.io4gf.mongodb.net/trainee_realtime_chat

@Module({
  imports: [
    MessagesModule,
    MongooseModule.forRoot(DBURL),
    UsersModule,
    ChatRoomModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
