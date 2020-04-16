import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  // Passing data using @Input decorator from conatiner component(Product-list) to nested component(StarComponent)
  // @Input decorator can be attached to a property of any type
  // @Prefix with @; Suffix with ()
  @Input() rating: number;
  starWidth: number;
  // Raising an event using @output decorator from nested component(StarComponent) to Container component(Product-list).
  // @output decorator can be use for any property declared as an EventEmitter
  // Use the generic argument to define the event payload type
  // Use the new keyword to create an instance of the EventEmitter
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  // Event binding
  onClick(): void {
    // use the emit method to raise the notify event ot the container component
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }

}
