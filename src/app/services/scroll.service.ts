import { Injectable } from '@angular/core';
import { Scroll } from '../scroll';
import { SCROLLS } from '../mock_scrolls';
import { Observable, of } from 'rxjs';
import { MessageService } from '../services/message.service';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  getScrolls(): Observable<Scroll[]> {
    this.messsageService.add('ScrollService: fetched scrolls');
    this.messsageService.add('You are not welcomed here.');
    this.messsageService.add(SCROLLS.pop().title);
    return of(SCROLLS);
  }
  constructor(private messsageService: MessageService) { }
}
