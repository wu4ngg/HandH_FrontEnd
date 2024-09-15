export interface IColorProductVariation {
    color_code: string,
    color_price: number,
    selected: boolean
}

export interface ISizeProductVariation {
    size_name: string,
    size_price: number
    selected: boolean
}

export interface IProductImage {
    image_url: string,
    image_alt?: string
}
export interface IProduct {
    product_name?: string,
    product_thumb?: string,
    product_description?: string,
    product_price: number,
    product_slug?: string,
    product_rating?: number,
    product_variations?: any,
    isDraft?: boolean,
    isPublished?: boolean,
    isModified?: (product_name: string) => boolean,
    product_category?: string;
    product_color?: IColorProductVariation[],
    product_size?: ISizeProductVariation[],
    images?: IProductImage[]
}