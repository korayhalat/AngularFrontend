import { ResponseModel } from "./responseModel";

export interface ListResponseModel<T> extends ResponseModel{
data:T[];       //Burdaki generic T hem category i hemde product i içeriyo.

} 