import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.scss']
})
export class ScenarioComponent implements OnInit {
  selectedScenario = '1';
  scenarioSummaries = {
    '1': {
      name: 'はじめにお読みください',
      summary: `はじめにお読みください`
    },
    '2': {
      name: '神の島',
      summary: `現代日本。休暇を利用して島に旅行に行くことになったプレイヤー一行。
      殺人事件が発生し、楽しい旅行は一転、殺人鬼からの逃亡劇と化してしまう。
      果たしてプレイヤーは生き残ることができるのだろうか…`
    },
    '3': {
      name: 'Comming Soon...',
      summary: ''
    }
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToScenario(): void {
    if (this.selectedScenario === '2') {
      this.router.navigate(['/content']);
    } else if (this.selectedScenario === '1') {
      this.router.navigate(['/agreement']);
    }
  }

}
