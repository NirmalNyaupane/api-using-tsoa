import { RestaurantValidation } from "../validators/restaurant.validation";
import { RestaurantEnitity } from "../entities/restaurant/restaurant.entity";
import ApiError from "../utils/ApiError";
class RestaurantService {
  async register(data: RestaurantValidation): Promise<RestaurantEnitity> {
    //check if restaurant is registered or not with that email
    const isEmailExists = await RestaurantEnitity.findOne({
      where: { email: data.email },
      select: ["email"],
    });

    if (isEmailExists) {
      throw new ApiError(400, "Restaurant is already registered");
    }
    const restaurant = new RestaurantEnitity();
    restaurant.name = data.name;
    restaurant.address = data.address;
    restaurant.email = data.email;
    restaurant.password = data.password;
    restaurant.type = data.type;

    return await RestaurantEnitity.save(restaurant);
  }

  async getAllRestaurant(): Promise<Omit<RestaurantEnitity, "password">[]> {
    const res = await RestaurantEnitity.find();
    return res;
  }

  async getSingleRestaurant(
    id: string
  ): Promise<Omit<RestaurantEnitity, "password">> {
    const restaurant = await RestaurantEnitity.findOneBy({ id: id });
    if (!restaurant) {
      throw new ApiError(400, "Restaurant with that id doesnot exits");
    }
    return restaurant;
  }
}

const restaurantService = new RestaurantService();

export default restaurantService;
