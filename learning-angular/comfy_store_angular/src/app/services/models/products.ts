
export interface Products {
    id: number,
    title: string,
    price: number,
    category: string,
    rating: Record<string, number>,
    description: string,
    image: string
}

export interface cartProduct extends Products {
    quantity: number
}