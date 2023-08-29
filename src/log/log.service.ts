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
    const nestLogsContexts = [
      'RoutesResolver',
      'RouterExplorer',
      'NestApplication',
    ];

    // Se for um log com um contexto padrão no NestJS ele retorna sem criar o registro no elasticsearch
    if (nestLogsContexts.includes(createLogDto.context)) return;

    await this.elasticSearchClient.index({
      index: 'logs',
      document: { ...createLogDto, registered_at: new Date() },
    });
  }
}
