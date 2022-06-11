import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularPractice';
  count = 0;
  data = 10;
  displayVal ='';
  show = true;
  color = 'redd';
  users = ['nidhi','huhu','ff','hhfgh','fgfdg'];
  details = [
    {
      'name' : 'nidhi',
      'email' : 'nidhi@gmail.com',
      'accounts': [
        'youtube',
         'google'
      ]

    },
    {
      'name' : 'huhu',
      'email' : 'huhu@gmail.com',
      'accounts': [
        'youtube',
         'google'
      ]

    },
    {
      'name' : 'fgfdg',
      'email' : 'fgfdg@gmail.com'

    },
    {
      'name' : 'ff',
      'email' : 'ff@gmail.com'

    },
    {
      'name' : 'hhfgh',
      'email' : 'hhfgh@gmail.com'

    }
  ]
  getClick(name:string,lastName:string){
    alert(name+' '+lastName);
  }
  getValue(name:string){
    this.displayVal = name;
 
  }

  Counter(type:boolean){
   (type) ? this.count++ : this.count-- 
  }

  updateColor(){
    this.color = "blue";
  }
}
