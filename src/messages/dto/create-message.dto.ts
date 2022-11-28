export class CreateMessageDto {
    message_id: string;
    sender_id: string;
    receiver_id: string;
    message_type: string;
    text: string;
    url: string;
    is_read: boolean;
    chat_room_id: string;
}
