import { Controller, Post, Route, Request, Body, Tags, Middlewares } from "tsoa";
import express from "express";
import { CreateOfferValidation } from "../validators/offer.validation";
import requestBodyValidator from "../middlewares/validators.middleware";


@Route("offer")
@Tags("offer")
export class OfferController extends Controller {
  @Post()
  @Middlewares(requestBodyValidator(CreateOfferValidation))
  async createOffer(
    @Request() req: express.Request,
    @Body() body: CreateOfferValidation
  ) {
    return { message: body };
  }
}
