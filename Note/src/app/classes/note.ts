import { User } from './user';
export class Note {
    title: string;
    text: string;
    color: string = '#fff';
    user: User;
}
