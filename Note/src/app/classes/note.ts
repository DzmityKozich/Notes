import { CurrentUser } from './current-user';
import { User } from './user';
export class Note {
  idNote: number;
  title: string = '';
  text: string = '';
  color: string = '#fff';
  user: CurrentUser;
}
