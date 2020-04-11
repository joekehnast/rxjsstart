import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';

  ngOnInit() {
    of(2, 4, 6, 8, 10).subscribe(console.log);

    from ([3, 6, 9, 12]).subscribe(
      val => console.log(`value ${val}`),
      err => console.log(`got an error`),
      () => console.log('completed')
    );
  }
}

