import { Component, OnInit } from '@angular/core';
import { Scroll } from '../scroll';
import { SCROLLS } from '../mock_scrolls';
import { ScrollService } from '../services/scroll.service';


@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {
  constructor(private scrollService: ScrollService) { }
  scrolls: Scroll[];
  selectedScroll: Scroll;
  book: Scroll = {
    id: 1,
    title: 'Heresy of Horus'
  };
  onSelect(scroll: Scroll): void {
    this.selectedScroll = scroll;
  }
  gotOutput(title: string) {
console.log('got a output', title);
  }
  getScrolls(): void {
    this.scrollService.getScrolls().subscribe(scrolls => this.scrolls = scrolls);
  }
  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //     .subscribe(heroes => this.heroes = heroes);
  // }
  ngOnInit() {
    this.getScrolls();
  }

}
