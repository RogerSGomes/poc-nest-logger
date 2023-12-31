import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogModule } from 'src/log/log.module';

@Module({
  imports: [LogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
