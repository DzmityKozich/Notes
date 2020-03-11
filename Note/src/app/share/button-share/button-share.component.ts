import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-share',
  templateUrl: './button-share.component.html',
  styleUrls: ['./button-share.component.css']
})
export class ButtonShareComponent implements OnInit {

  @Input() public buttonName: string;
  @Input() public buttonStyle: string;
  @Input() public buttonType = 'button';

  constructor() { }

  ngOnInit() {
  }

}
