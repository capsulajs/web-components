import { Observable, of, timer, merge } from 'rxjs';
import { delayWhen } from 'rxjs/operators';
import LoggerUIProps from '../api/LoggerUIProps';
import logs from './logs';

export const props$: Observable<LoggerUIProps> = of({
  logs$: merge(
    ...logs.map(({ correlationId, type, serviceName, methodName, content, delay }) =>
      of({
        correlationId,
        type,
        serviceName,
        methodName,
        timestamp: new Date().getTime(),
        data: { content },
      }).pipe(delayWhen(() => timer(delay)))
    )
  ),
});
