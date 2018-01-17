import {NgModule} from "@angular/core";
import {InformationBlockComponent} from "./information-block/information-block.component";
import {CommonModule} from "@angular/common";
import {HomePageComponent} from "./home-page.component";
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
   declarations:[
       HomePageComponent,
       InformationBlockComponent,
       AboutMeComponent,
       ExperienceComponent,
       SkillsComponent,
       PortfolioComponent
   ],
    imports:[CommonModule]
})
export class HomePageModule{

}