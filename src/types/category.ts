export interface ICategory {
    category_name: string,
    category_description: string,
    cagtegory_image: string,
    category_total: number
}


const sampleCategories: ICategory[] = [
    {
        category_name: 'Áo đầm',
        category_description: 'Latest gadgets and electronics.',
        cagtegory_image: 'https://png.pngtree.com/png-clipart/20231005/original/pngtree-red-dress-for-party-png-image_13123155.png',
        category_total: 150
    },
    {
        category_name: 'Áo',
        category_description: 'A wide range of books from various genres.',
        cagtegory_image: 'https://chiinstore.com/media/product/4096_634x634___2022_01_24t140724_196.png',
        category_total: 200
    },
    {
        category_name: 'Quần',
        category_description: 'Trendy and fashionable clothing items.',
        cagtegory_image: 'https://bizweb.dktcdn.net/100/479/837/products/4186-634x634-2022-03-04t102818-881-1680531545008.png?v=1688705311553',
        category_total: 300
    },
    {
        category_name: 'Áo khoác',
        category_description: 'Trendy and fashionable clothing items.',
        cagtegory_image: 'https://chiinstore.com/media/product/3928_634x634___2021_12_30t111520_009.png',
        category_total: 300
    }
];

export {
    sampleCategories,
}