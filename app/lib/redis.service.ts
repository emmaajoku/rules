import {Injectable} from '@nestjs/common';
import {config} from '../config/config';
import * as redisClient from 'ioredis';

@Injectable()
export class RedisInit {
    private static connection;

    connect() {
        if (!RedisInit.connection) {
            let options: object = {
                host: config.redis.host,
                port: config.redis.port,
                db: config.redis.db
            }
            RedisInit.connection = new redisClient(options);    
        }
        return RedisInit.connection;
    }
}