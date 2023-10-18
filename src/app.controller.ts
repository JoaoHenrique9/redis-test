import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { RedisService } from './config/redis.service';

@Controller('redis')
export class RedisController {
  constructor(private readonly redisService: RedisService) {}

  @Post('/edit/:key')
  async setKeyValue(
    @Param('key') key: string,
    @Body() body: any,
  ): Promise<void> {
    await this.redisService.set(key, JSON.stringify(body));
  }

  @Get(':key')
  async getValue(@Param('key') key: string): Promise<any> {
    const result = await this.redisService.get(key);
    return result ? JSON.parse(result) : null;
  }

  @Post(':key')
  async postValue(@Param('key') key: string): Promise<any> {
    const result = await this.redisService.get(key);
    return result ? JSON.parse(result) : null;
  }

  @Put(':key')
  async putValue(@Param('key') key: string): Promise<any> {
    const result = await this.redisService.get(key);
    return result ? JSON.parse(result) : null;
  }

  @Patch(':key')
  async patchValue(@Param('key') key: string): Promise<any> {
    const result = await this.redisService.get(key);
    return result ? JSON.parse(result) : null;
  }

  @Delete(':key')
  async deleteValue(@Param('key') key: string): Promise<any> {
    const result = await this.redisService.get(key);
    return result ? JSON.parse(result) : null;
  }

  @Delete('delete/:key')
  async deleteKey(@Param('key') key: string): Promise<void> {
    await this.redisService.del(key);
  }
}
