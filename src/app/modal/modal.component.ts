import { Component, OnInit, Input } from '@angular/core';
import { Characther } from '../models/Characthers';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() characther: Characther;

  constructor() { }

  ngOnInit(): void {
  }

}
