import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { TextField } from "tns-core-modules/ui/text-field";
import { TranslateService } from '@ngx-translate/core';
import { Button } from "tns-core-modules/ui/button";
import { EventData } from "tns-core-modules/ui/page";

@Component({
  selector: "Home",
  templateUrl: "./home.component.html"
})


export class HomeComponent implements OnInit {
  public panel = [[],[],[]];
    public lang:string="en";
  constructor(private translate:TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');

  }
  name = "";
 
  ngOnInit(): void {
  }

  getWeather(i): void {
    // console.log(this.name);
    // alert(i);
    this.panel[i] = [];
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + this.name + '&appid=5e3cdf9ffdcea6e5287405320efbc8e3')
      .then(response => response.json())
      .then(data => {
        // this.translate.get(data['weather'][0]['description']).subscribe((text:string) => {console.log(text)});

         this.translate.get(data['name']).subscribe((text:string) => {this.panel[i].push(text);});
        // this.panel[i].push(this.name);
        this.translate.get('Temperature').subscribe((text:string) => {this.panel[i].push(text+":"+data['main']['temp'])});
        this.translate.get('Humidity').subscribe((text:string) => {this.panel[i].push(text+":"+data['main']['humidity'])});
      })
      .catch(err => alert("Wrong city name!"));
    this.name = "";
  }
  changeLang(args:EventData):void{
    let l=this.translate.currentLang;
    if(l=="en"){
      // console.log("Change tamil");
      this.translate.use('ta');
      let button = args.object as Button;
    button.text="Change Language to English";
    this.panel = [[],[],[]];
    }
    else{
      // console.log("Chnage english");
      this.translate.use('en');
      let button = args.object as Button;
      button.text="Change Language to Tamil";
      this.panel = [[],[],[]];
    
    }
  }

}


