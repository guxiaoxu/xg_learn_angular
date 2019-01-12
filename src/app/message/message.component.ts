import { ActivatedRoute, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageDisplayComponent implements OnInit {
  message: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.message = data['msg'];
        }
      );
  }

}
