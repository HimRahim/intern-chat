import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({
    type: String,
    default: function genUUID() {
      return uuidv4();
    },
  })
  user_id: string;

  @Prop()
  username: string;

  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop()
  profile_picture: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
