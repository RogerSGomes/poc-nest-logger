import { Injectable } from '@nestjs/common';

import { getElasticSearchClient } from 'src/common/clients/elasticsearch.client';

@Injectable()
export class LogService {
  private readonly elasticSearchClient = getElasticSearchClient();

  async getAll() {
    return await this.elasticSearchClient.search({
      index: 'logs',
      size: 10000,
    });
  }

  async createLog(createLogDto: {
    level: 'log' | 'warn' | 'error';
    message: string;
    context: string;
  }): Promise<any> {
    if (
      !['RoutesResolver', 'RouterExplorer', 'NestApplication'].includes(
        createLogDto.context,
      )
    )
      await this.elasticSearchClient.index({
        index: 'logs',
        type: 'logs_type',
        body: { ...createLogDto, registered_at: new Date() },
      });
  }
}
