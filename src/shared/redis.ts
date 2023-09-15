import { createClient } from 'redis';
import config from '../config';
import logger from './logger';

const redisClient = createClient({
  url: config.redis.url
});

redisClient.on('error', (error) => {
  logger.error('RedisError', error);
});

redisClient.on('connect', (data) => {
  logger.info('Redis connected');
});

const connect = async (): Promise<void> => {
  await redisClient.connect();
};

export const RedisClient = {
  connect
};
