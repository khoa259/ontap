import { add, get, removeItem, update } from '@/api/products'
import { ProductsType } from '@/type/products'
import React from 'react'
import useSWR from 'swr'


const useProducts = () => {
    const { data, error, mutate} = useSWR("/products")
    const create = async (item:ProductsType)=> {
        const product = await add(item) 
        mutate([...data, product])
    }
    const remove = async(id:number) => {
        await removeItem(id)
        const newProducts = data.filter((item:any) => item.id != id)
        mutate(newProducts)
    }
    const getItem = async(id:number) => {
        const product = await get(id)
        return product
    }
    const updateItem = async (prd:ProductsType) => {
        const product =  await update(prd)
        mutate(data.map((item:any) => (item.id == data.id) ? prd : item))
    }
    return {
        data, error, mutate, create, remove, getItem, updateItem
  }
}

export default useProducts