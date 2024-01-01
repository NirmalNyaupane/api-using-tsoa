import ApiError from "../utils/ApiError";
import { CategoryEntity } from "../entities/category/category.entity";
import { ProductEntity } from "../entities/product/product.entity";
import { ProductValidation } from "../validators/product.validation";

class ProductService{
    async insert(payload:ProductValidation){
        //check if category exists or not
        const category = await CategoryEntity.findOneBy({id:payload.category_id});

        if(!category){
            throw new ApiError(400,"Category is not found");
        }
    
        const product = new ProductEntity();
        product.description=payload.description;
        product.name=payload.name;
        product.price=+payload.price;
        product.stock=+payload.stock;

        const productResponse =  await ProductEntity.save(product);

        category.products = [productResponse];
        const categoryResposne =  await CategoryEntity.save(category);

        const {products} = categoryResposne;
        return products;
    }

    async findAll(){
        return await ProductEntity.find();
    }
}

const productService = new ProductService();
export default productService;