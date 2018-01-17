import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-information-block',
  templateUrl: './information-block.component.html',
  styleUrls: ['./information-block.component.scss']
})
export class InformationBlockComponent implements OnInit {
  @ViewChild('h1') title_h1;
  @ViewChild('h2') title_h2;
  h1:String = 'Ищу работу в напрвелении front-end разработчика ';
  h2:String = 'Подробную информацию и контактные данные вы можете получить ниже';
  constructor() {

  }

  ngOnInit() {
     let array = this.h1.split('');
     let array2 = this.h2.split('');
     let ref_h1=this.title_h1.nativeElement;
     let ref_h2=this.title_h2.nativeElement;
     let i = 0;
     setTimeout(function timer(){
       if (i % 2 == 0)
         ref_h1.innerHTML+=array[i]+'|';
       else
          ref_h1.innerHTML=ref_h1.innerHTML.slice(0,-1)+array[i];
       i++;
       if (i<array.length)
         setTimeout(timer,45);
       else{
         i=0;
         setTimeout(function timer_2(){
           if (i % 2 == 0)
             ref_h2.innerHTML+=array2[i]+'|';
             else
               ref_h2.innerHTML=ref_h2.innerHTML.slice(0,-1)+array2[i];
             i++;
             if (i<array2.length)
                 setTimeout(timer_2,35);
         },100);
       }
     },1000);
  }
  navigate(){
      const target = 'skills';
      document.getElementById(target).scrollIntoView({ behavior: 'smooth',block: "start"});
  }
}
