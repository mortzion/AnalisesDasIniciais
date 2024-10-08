import {Component} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { Output, EventEmitter } from '@angular/core';

/**
 * @title Nested menu
 */
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
})
export class MenuComponent {
  @Output() incapacidade: EventEmitter<any> = new EventEmitter();
  @Output() basico: EventEmitter<any> = new EventEmitter();
  @Output() pensao: EventEmitter<any> = new EventEmitter();

  handleClick() {
    this.incapacidade.emit();
  }

  handleClick2() {
    this.basico.emit();
  }

  handleClick3() {
    this.pensao.emit();
    }
}
