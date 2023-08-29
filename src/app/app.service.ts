import { Injectable, Logger, NotFoundException } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    this.logger.warn('User not found');
    throw new NotFoundException('User not found');
    return 'Hello World!';
  }
}
