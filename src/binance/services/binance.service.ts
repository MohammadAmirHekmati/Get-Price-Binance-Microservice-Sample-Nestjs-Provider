import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios'
import { JsonResDto } from '../json.res.dto';
@Injectable()
export class BinanceService {

  async getPriceBySymbol(symbol:string):Promise<any>
  {
    const userSymbol=symbol.toUpperCase()
    const apiResponse=await axios.get('https://www.binance.com/api/v1/ticker/price')
    if (apiResponse.status!==200)
      throw new BadRequestException()

  const data:JsonResDto[]=apiResponse.data
    const myChoose=data.find(x=>x.symbol==userSymbol)
    if (!myChoose)
      throw new NotFoundException()
    return myChoose.price
  }

}