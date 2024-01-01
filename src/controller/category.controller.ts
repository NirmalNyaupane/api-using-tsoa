import { Controller, Post, Route, Request, Body, Tags, Get, Path, Delete, Middlewares } from "tsoa";
import express from 'express';
import { CreateCategory } from "../validators/category.validation";
import categoryService from "../service/category.service";
import requestBodyValidator from "../middlewares/validators.middleware";

@Route("category")
@Tags("category")
export class CategoryController extends Controller{
    @Post()
    @Middlewares(requestBodyValidator(CreateCategory))
    async add(@Request() req:express.Request, @Body() body:CreateCategory){
        return categoryService.insert(body);
    }

    @Get(":id")
    async getById(@Path() id:string){
        return categoryService.findById(id);
    }

    @Get()
    async getAll(){
        return categoryService.findAll();
    }

    @Delete(":id")
    async deleteCategory(@Path() id:string){
        return categoryService.delete(id);
    }
}