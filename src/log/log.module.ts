import { Module } from '@nestjs/common';

import { LogService } from './log.service';
import { CustomLogger } from 'src/common/custom/logger';
import { LogController } from './log.controller';

@Module({
  imports: [],
  controllers: [LogController],
  providers: [LogService, CustomLogger],
  exports: [LogService, CustomLogger],
})
export class LogModule {}
