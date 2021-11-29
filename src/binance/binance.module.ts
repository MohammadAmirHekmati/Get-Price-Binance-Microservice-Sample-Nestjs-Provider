import { Module } from '@nestjs/common';
import { BinanceService } from './services/binance.service';
import { BinanceController } from './controllers/binance.controller';

@Module({
  providers:[BinanceService],
  controllers:[BinanceController]
})
export class BinanceModule {}
