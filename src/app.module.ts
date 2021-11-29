import { Module } from '@nestjs/common';
import { BinanceModule } from './binance/binance.module';

@Module({
  imports: [BinanceModule],
})
export class AppModule {}
