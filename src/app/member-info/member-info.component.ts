import { Component, OnInit} from '@angular/core';
import { Info } from './info';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-member-info',
  templateUrl: './member-info.component.html',
  styleUrls: ['./member-info.component.scss']
})
export class MemberInfoComponent implements OnInit {
  data = {} as Info;
  constructor() { }
  ngOnInit() {
  }

}
