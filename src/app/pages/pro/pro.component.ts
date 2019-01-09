import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.scss']
})
export class ProComponent implements OnInit {
  content =  {
    name: '神の島',
    summary: `現代日本。休暇を利用して島に旅行に行くことになったプレイヤー一行。
    殺人事件が発生し、楽しい旅行は一転、殺人鬼からの逃亡劇と化してしまう。
    果たしてプレイヤーは生き残ることができるのだろうか…
    `
  };
  constructor() { }

  ngOnInit() {
  }

}
