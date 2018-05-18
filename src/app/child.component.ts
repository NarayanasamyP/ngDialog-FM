import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `
  <wrapper>
  <ng-container ngProjectAs="div">
    <div>New Content from Div</div>
  </ng-container>
  <ng-container ngProjectAs="para">
    <p>New Content from paragraph</p>
  </ng-container>
</wrapper>
  `
})
export class ChildComponent {
}
