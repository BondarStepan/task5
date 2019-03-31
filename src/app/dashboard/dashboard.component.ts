import { Component, OnInit } from '@angular/core';
import { Scroll } from '../scroll';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  scrolls: Scroll[] = [];

  constructor(private scrollService: ScrollService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.scrollService.getScrolls()
      .subscribe(scrolls => this.scrolls = scrolls.slice(1, 5));
  }
}
