import {
  Controller,
  Route,
  Post,
  Request,
  Get,
  Tags,
  Patch,
  Path,
  Query,
  Body,
  Middlewares,
  SuccessResponse,
} from "tsoa";

import express from "express";
import { RestaurantValidation } from "../validators/restaurant.validation";
import requestBodyValidator from "../middlewares/validators.middleware";
import restaurantService from "../service/restaurant.service";

@Route("restaurant")
@Tags("Restaurant")
export class RestaurantController extends Controller {
  /**
   * @summary inserts new restaurant
   */
  @Post()
  @Middlewares(requestBodyValidator(RestaurantValidation))
  async registerRestaurant(
    @Request() req: express.Request,
    @Body() body: RestaurantValidation
  ) {
    this.setStatus(201);
    return await restaurantService.register(body);
  }

  /**
   * @summary get all restaurant
   */
  @Get()
  async getAllRestaurant() {
    return await restaurantService.getAllRestaurant();
  }


  /**@summary get restaurant by id */

  @Get(":id")
  async getRestaruantById(@Path("id") id:string){
    return await restaurantService.getSingleRestaurant(id);
  }
}
