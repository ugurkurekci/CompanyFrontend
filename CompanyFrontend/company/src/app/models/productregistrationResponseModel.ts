import { ProductRegistration } from "./productregistration";
import { responseModel } from "./responseModel";

export interface ProductRegistrationResponseModel extends responseModel{
    data:ProductRegistration[],
   
}