import useProducts from '@/hook/use-products'
import Link from 'next/link'
import React from 'react'


const ListProducts = () => {
    const { data, error, remove } = useProducts()
    if (error) return <div>failed to load</div>
    if (!data) return <div> loading...</div>
    const del = async(id:number) => {
        const cf = window.confirm("bạn có muốn xóa không")
        if(cf) {
            await remove(id)
            alert('bạn đã xóa thành công')
        }
    }
    return (
        <div>
            <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                STT
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Img
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Price
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Desc
                            </th>
                            <th scope="col" className="py-3 px-6">
                                HANDLE
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item:any, index:any) => (

                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="py-4 px-6">
                                    {index+1}
                                </td>
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.name}
                                </th>
                                <td className="py-4 px-6">
                                    <img src={item.img} alt="" width={200}/>
                                </td>
                                <td className="py-4 px-6">
                                    {item.price}$
                                </td>
                                <td className="py-4 px-6">
                                     {item.desc}
                                </td>
                                <td className="py-4 px-6">
                                    <button onClick={() => {del(item.id)}} >xóa</button>
                                </td>
                                <td>
                                    <Link href={`products/${item.id}/edit`}>Sửa</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListProducts