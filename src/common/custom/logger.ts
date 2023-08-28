import { Injectable, ConsoleLogger } from '@nestjs/common';
import { ConsoleLoggerOptions } from '@nestjs/common/services/console-logger.service';
import { LogService } from '../../log/log.service';

@Injectable()
export class CustomLogger extends ConsoleLogger {
  constructor(
    context: string,
    options: ConsoleLoggerOptions,
    private readonly logService: LogService,
  ) {
    super(context, {
      ...options,
      logLevels: ['log', 'warn', 'error'],
    });
  }

  log(message: string, context?: string) {
    super.log.apply(this, [message, context]);

    this.logService.createLog({
      level: 'log',
      context,
      message,
    });
  }

  error(message: string, stack?: string, context?: string) {
    super.error.apply(this, [message, stack, context]);

    this.logService.createLog({
      level: 'error',
      context,
      message,
    });
  }

  warn(message: string, context?: string) {
    super.warn.apply(this, [message, context]);

    this.logService.createLog({
      level: 'error',
      context,
      message,
    });
  }
}
