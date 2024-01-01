import { Controller } from "tsoa";
import { RestaurantEnitity } from "../entities/restaurant/restaurant.entity";
import { CreateCategory } from "../validators/category.validation";
import ApiError from "../utils/ApiError";
import { CategoryEntity } from "../entities/category/category.entity";
import { ProductEntity } from "../entities/product/product.entity";

class CategoryService extends Controller {

  async insert(payload: CreateCategory) {
    //check if restaurant is present or not
    const restaurant = await RestaurantEnitity.findOneBy({
      id: payload.restaurant_id,
    });

    if (!restaurant) {
      throw new ApiError(400, "Restaurant is not found with that id");
    }

    const category = new CategoryEntity();
    category.name = payload.name;
    category.description = payload.description;

    const categoryResponse =  await CategoryEntity.save(category);
    restaurant.categories = [categoryResponse];
    return await RestaurantEnitity.save(restaurant);
  }

  async findById(id:string){
    const category = await CategoryEntity.find({
      where:{
        id:id
      },
      relations:["products"]
    });
    if(!category){
      throw new ApiError(400,"Category with that id doesnot found");
    }
    return category;
  }

  async findAll(){
    const category = await CategoryEntity.find();
    return category;
  }

  async delete(id:string){
    const category = await CategoryEntity.findOneBy({id:id});
    if(!category){
      throw new ApiError(400,"Category with that id doesnot found");
    }

    const deleteResponse = await CategoryEntity.delete({id:id});
    if(deleteResponse.affected===1){
      return {message:"deleted category sucessfully"};
    }else{
      return {message:"Problem occurs during deleting"};
    }
  }
}

const categoryService = new CategoryService();
export default categoryService;