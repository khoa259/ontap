import { ProductsType } from "@/type/products";
import instance from "./instance";

export const get = (id:number) => {
    return instance.get("/products/" +id)
}
export const add = (product:ProductsType)=> {
    return instance.post ("/products" , product)
}
export const removeItem = (id:number) => {
    return instance.delete(`/products/${id}`)
}
export const update = (product:ProductsType)=> {
    return instance.put("/products/" + product.id , product)
}