import { Observable, fromEvent } from "rxjs";
import { map } from "rxjs/operators";

const observer = {
  next: (value) => console.log("next", value),
  error: (error) => console.log("error", error),
  complete: () => console.log("complete!"),
};

const observable = new Observable((subscriber) => {
  subscriber.next("Hello");
});

observable.subscribe(
  // observer here
  observer
);
