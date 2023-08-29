import { Client } from '@elastic/elasticsearch';

export function getElasticSearchClient() {
  try {
    return new Client({
      node: 'http://localhost:9200',
    });
  } catch (e) {
    console.log('Error pegar client do ElasticSearch: ' + e.message);
  }
}
