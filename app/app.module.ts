import { Module, CacheModule, CacheInterceptor } from '@nestjs/common';
import { AppController } from 'app/app.controller';
import { AppService } from 'app/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RulesModule } from 'app/rules/rules.module';
import { Connection } from 'typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';
import * as redisStore from 'cache-manager-redis-store';
import { config } from 'app/config/config';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    RulesModule,
    CacheModule.register(
      {
        store: redisStore,
        host: config.redis.host,
        port: config.redis.port,
        database: config.redis.db,
        ttl: 0,
        max: 0,
      },
    ),
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    }
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
