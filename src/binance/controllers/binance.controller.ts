import { Controller } from '@nestjs/common';
import { BinanceService } from '../services/binance.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class BinanceController {
  constructor(private readonly binanceService:BinanceService)
  {}

  @MessagePattern('getPriceBySymbol')
  async getPriceBySymbol(symbol:string):Promise<any>
  {
    return await this.binanceService.getPriceBySymbol(symbol)
  }

}