import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MailService} from "./mail.service";
import * as smoothscroll from "smoothscroll-polyfill";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   menu = [];
   mail_message='';
   @ViewChild('nav') nav;
   @ViewChild('send_error') s_err;
   @ViewChild('mail_mes') m_ms;
   constructor(private mailService:MailService){
       smoothscroll.polyfill();
     this.menu = [
         {label:'Обо мне',href:'#about_me'},
         {label:'Опыт работы',href:'#experience'},
         {label:'Навыки',href:'#skills'},
         {label:'Портфолио',href:'#portfolio'}
         ]
   }
   feedback(){
      window.location.href="/#feedback"
   }
   menu_toggle(){
     this.nav.nativeElement.classList.toggle('header__menu_active');
   }
   close_nav(event:Event){
       event.preventDefault();
       const target = (<HTMLAnchorElement>event.target).hash.slice(1);
       document.getElementById(target).scrollIntoView({ behavior: 'smooth',block: "start"});
       this.nav.nativeElement.classList.remove('header__menu_active');
   }
   sendMail(form:NgForm){
        const elem = this.s_err.nativeElement;
        const mes = this.m_ms.nativeElement;
        const object={
            name:form.controls.name.value,
            phone:form.controls.phone.value,
            email:form.controls.email.value,
        };
        if(form.valid){
            window.location.href=window.location.href+'#close';
            this.mailService.send_mail(object).subscribe(()=>{
                this.mail_message='Сообщение отправлено.';
                mes.classList.add('mail-message_show');
                setTimeout(function(){
                    mes.classList.remove('mail-message_show');
                },2500);
            },()=>{
                this.mail_message='Ошибка отправки сообщения.';
                mes.classList.add('mail-message_show');
                setTimeout(function(){
                    mes.classList.remove('mail-message_show');
                },2500);
            });
            form.reset();
        }
        else{
            elem.classList.add('send-error_show');
            setTimeout(function(){
                elem.classList.remove('send-error_show');
            },3500);
        }
   }

}
