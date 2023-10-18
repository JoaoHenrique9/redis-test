import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
import { RedisService } from './config/redis.service';
import { RedisController } from './app.controller';

@Module({
  imports: [ConfigModule],
  controllers: [RedisController],
  providers: [
    {
      provide: Redis,
      useFactory: async (configService: ConfigService) => {
        const redisConfig = {
          host: configService.get('REDIS_HOST'),
          port: configService.get('REDIS_PORT'),
          // Outras opções de configuração do Redis
        };
        return new Redis(redisConfig);
      },
      inject: [ConfigService],
    },
    RedisService,
  ],
  exports: [RedisService],
})
export class RedisModule {}
