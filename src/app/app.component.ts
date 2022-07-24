import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  public title = 'HolaMundo';
  public nombre = 'Adrian'

  recibirmensaje(event: string){
    alert(event);
  }
}
