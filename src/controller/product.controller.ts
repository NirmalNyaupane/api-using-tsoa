import { Controller, Route, Tags, Request, Body, Post, Get } from "tsoa";
import express from "express";
import { ProductValidation } from "../validators/product.validation";
import productService from "../service/product.service";

@Route("product")
@Tags("product")
export class ProductController extends Controller {
  @Post()
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
