import { CurrentUser } from './current-user';
export class Note {
  idNote: number;
  title: string = '';
  text: string = '';
  color: string = '#fff';
  user: CurrentUser;
  isEdit ? = false;
}
