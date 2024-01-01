import { Controller, Route, Tags, Request, Body, Post, Get, Middlewares } from "tsoa";
import express from "express";
import { ProductValidation } from "../validators/product.validation";
import productService from "../service/product.service";
import requestBodyValidator from "../middlewares/validators.middleware";
import { UpdateCategory } from "../validators/category.validation";

@Route("product")
@Tags("product")
export class ProductController extends Controller {
  @Post()
  @Middlewares(requestBodyValidator(UpdateCategory))
  async addProduct(
    @Request() req: express.Request,
    @Body() body: ProductValidation
  ) {
    return await productService.insert(body);
  }
  
  @Get()
  async getAllProducts(){
    return await productService.findAll();
  }
}
