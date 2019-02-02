import {Component, OnInit} from "@angular/core";
@Component({
    selector:'app-home-page',
    templateUrl:'./home-page.component.html',
    styleUrls:['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
    ngOnInit(){
        const element = document.getElementById('about_me');
        const exp_item1 = document.getElementById('exp_item1');
        const exp_item2 = document.getElementById('exp_item2');
        const exp_item3 = document.getElementById('exp_item3');
        const height = document.documentElement.clientHeight;
        const scroll = window.pageYOffset;
        const element_top = element.offsetTop;
        if(height+scroll > element_top) {
            element.classList.add("about-me_fade-in");
        }
        if(height+scroll > exp_item1.offsetTop) {
            exp_item1.classList.add("experience__item_animate-right");
        }
        if(height+scroll > exp_item2.offsetTop) {
            exp_item2.classList.add("experience__item_animate-right");
        }
        if(height+scroll > exp_item3.offsetTop) {
            exp_item3.classList.add("experience__item_animate-right");
        }
        window.onscroll = function(){
            const height = document.documentElement.clientHeight;
            const scroll = window.pageYOffset;
            const element_top = element.offsetTop;
            if(height+scroll > element_top) {
                element.classList.add("about-me_fade-in");
            }
            if(height+scroll > exp_item1.offsetTop) {
                exp_item1.classList.add("experience__item_animate-right");
            }
            if(height+scroll > exp_item2.offsetTop) {
                exp_item2.classList.add("experience__item_animate-right");
            }
            if(height+scroll > exp_item3.offsetTop) {
                exp_item3.classList.add("experience__item_animate-right");
            }
        }
        window.onresize = function(){
            const height = document.documentElement.clientHeight;
            const scroll = window.pageYOffset;
            const element_top = element.offsetTop;
            if(height+scroll > element_top) {
                element.classList.add("about-me_fade-in");
            }
            if(height+scroll > exp_item1.offsetTop) {
                exp_item1.classList.add("experience__item_animate-right");
            }
            if(height+scroll > exp_item2.offsetTop) {
                exp_item2.classList.add("experience__item_animate-right");
            }
            if(height+scroll > exp_item3.offsetTop) {
                exp_item3.classList.add("experience__item_animate-right");
            }
        }
    }
}