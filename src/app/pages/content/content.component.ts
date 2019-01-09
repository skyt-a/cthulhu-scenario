import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  selectedContents = 'pro';

  constructor(private router: Router) { }
  
  ngOnInit() {
  }

  setContents(contentsWord: string) {
    this.selectedContents = contentsWord;
  }

  return(): void {
    this.router.navigate(['/scenario']);
  }

}
