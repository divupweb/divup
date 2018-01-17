
import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MailService{
  constructor(private http:Http){

  }
  send_mail(obj){
      return this.http.post('http://divup.ru/mail_send.php',obj).catch((error:Response)=>Observable.throw('Ошибка отправки сообщения'));
  }
}