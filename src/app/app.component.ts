import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name = signal('standaloneSample');

  public sample(){
  //this.name.set(`${this.name()} ${Math.random()}`);
 this.name.update((value)=> `${value} - ${1+1}`);
 console.log('hi');
  }
}
