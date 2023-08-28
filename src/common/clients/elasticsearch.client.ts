import { Client } from 'elasticsearch';

export function getElasticSearchClient() {
  try {
    return new Client({
      host: 'http://localhost:9200',
    });
  } catch (e) {
    console.log('Error pegar client do ElasticSearch: ' + e.message);
  }
}
