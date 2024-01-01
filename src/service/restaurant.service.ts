import ApiError from "../utils/ApiError";
import { RestaurantEnitity } from "../entities/restaurant/restaurant.entity";
import { RestaurantValidation } from "../validators/restaurant.validation";

class RestaurantService {
  //Insert a restaurant
  async insert(data: RestaurantValidation) {
    //check if email is already exits or not, if exits throw an error saying restaurant is already registered
    const restaurantId = await RestaurantEnitity.findOne({
      where: { email: data.email },
      select: ["id"],
    });

    if (restaurantId) {
      throw new ApiError(400, "Email is already registered");
    }

    const restaurant = new RestaurantEnitity();
    restaurant.address = data.address;
    restaurant.email = data.email;
    restaurant.name = data.name;
    restaurant.type = data.type;
    restaurant.password = data.password;

    const response = await RestaurantEnitity.save(restaurant);
    const { password, categories, ...remainingData } = response;
    return remainingData;
  }

  //update a restaurant

  //getAllRestaurant route
  async findAll() {
    return await RestaurantEnitity.find();
  }

  //delete restaurant
  async delete(id: string) {
    // checking if restaurant is present or not
    const restaurant = await RestaurantEnitity.findOneBy({ id: id });

    if (!restaurant) {
      throw new ApiError(400, "Restaurant is not found with that id");
    }

    const response = await RestaurantEnitity.delete({ id: id });

    if (response.affected === 1) {
      return { message: "Restaurant deleted sucessfully" };
    }else{
        throw new ApiError(500,"Problem occurs during the deleting restaurant");
    }
  }
}

const restaurantService = new RestaurantService();
export default restaurantService;
