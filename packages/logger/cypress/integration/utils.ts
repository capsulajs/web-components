import { Observable, of, timer, merge } from "rxjs";
import { delayWhen } from "rxjs/operators";
import { Event } from "../../types";

const createAdeleEvent = (content, delay) =>
  of({
    correlationId: "Adele",
    type: "request",
    serviceName: "AdeleService",
    methodName: "hello$",
    timestamp: new Date().getTime(),
    data: { content }
  }).pipe(delayWhen(() => timer(delay)));

const createSupportEvent = (content, delay) =>
  of({
    correlationId: "Support",
    type: "response",
    serviceName: "PhoneService",
    methodName: "hello$",
    timestamp: new Date().getTime(),
    data: { content }
  }).pipe(delayWhen(() => timer(delay)));

const getLogs = (): Observable<Event> =>
  merge(
    createAdeleEvent("Hello, it's me", 0),
    createAdeleEvent(
      "I was wondering if after all these years you'd like to meet",
      2500
    ),
    createAdeleEvent(
      "They say that time's supposed to heal ya, but I ain't done much healing",
      5000
    ),
    createAdeleEvent("Hello, can you hear me?", 7500),
    createSupportEvent("No", 10000)
  );

export const isValidateTimestamp = (text) => /^([0-9]{2})\:([0-9]{2}):([0-9]{2})$/.test(text);
export const getProps = () =>
  of({
    logs$: getLogs()
  });
