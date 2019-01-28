import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  body: string [] = ["If you are alone when you crack open a peanut shell and eat the peanut inside, you are the only person in the world to have ever seen that peanut.", "What are some guy secrets girls don't know about?", "Venezuela's top military envoy to the United States has defected to support the opposition leader and calls for more to follow", "Margaret Hamilton, NASA's lead software engineer for the Apollo Program, stands next to the code she wrote by hand that took Humanity to the moon in 1969.", "Who needs an alarm clock on Sunday morning when you have a PLANK WAR going off at the neighbors" ];

  imgsrc: string = "../assets/img/icon1.png";

  subreddit: string = "r/todayilearned";
}
