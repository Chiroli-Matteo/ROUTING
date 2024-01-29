import { Component } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent {
  fruits = [
    { name: 'uva', emoji: '🍇' },
    { name: 'melone', emoji: '🍈' },
    { name: 'anguria', emoji: '🍉' },
    { name: 'arancia', emoji: '🍊' },
    { name: 'limone', emoji: '🍋' },
    { name: 'banana', emoji: '🍌' },
    { name: 'ananas', emoji: '🍍' },
    { name: 'mela rossa', emoji: '🍎' },
    { name: 'mela verde', emoji: '🍏' },
    { name: 'pera', emoji: '🍐' },
    { name: 'albicocca', emoji: '🍑' },
    { name: 'ciliegie', emoji: '🍒' },
  ]
}
