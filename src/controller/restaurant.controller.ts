import express from "express";
import { Body, Controller, Delete, Get, Middlewares, Patch, Path, Post, Request, Route, Tags } from "tsoa";
import requestBodyValidator from "../middlewares/validators.middleware";
import restaurantService from "../service/restaurant.service";
import {
    RestaurantValidation,
    UpdateRestaurantValidation,
} from "../validators/restaurant.validation";

@Route("restaurant")
@Tags("Restaurant")
export class RestaurantController extends Controller {
  @Post()
  @Middlewares(requestBodyValidator(RestaurantValidation))
  async register(
    @Request() req: express.Request,
    @Body() body: RestaurantValidation
  ) {
    return restaurantService.insert(body);
  }

  @Patch()
  @Middlewares(requestBodyValidator(UpdateRestaurantValidation))
  async update(
    @Request() req: express.Request,
    @Body() body: UpdateRestaurantValidation
  ) {
    return body;
  }

  @Get()
  async getAllRestaurant(){
    return restaurantService.findAll()
  }

  @Delete(":id")
  async deleteRestaurant(@Path() id:string){
    return restaurantService.delete(id);
  }
}
