import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item : MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if(itemExist){
            //Compara cual es el elemento repetido por medio de id's, se usa map para crear una copia del arreglo (cuestiones de mutabildiad)
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? 
                {...orderItem, quantity: orderItem.quantity +1} : //Esto toma una copia de lo que YA HAY EN LA ORDEN pero en la cantidad toma lo que ya hay de cantidad y lo incrementa en 1
                orderItem //Esto retorna los elementos que NO SON IGUALES al que se esta agregando (no duplicados)
            )
            setOrder(updatedOrder) 
        } else{
            const newItem = {...item, quantity : 1}
            setOrder([...order, newItem])    
        }

    }
                            //Lookup
    const removeItem = (id : MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }

    return {
        order,
        addItem,
        removeItem
    }
}