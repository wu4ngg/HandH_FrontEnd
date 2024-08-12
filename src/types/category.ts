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
        cagtegory_image: 'https://owen.cdn.vccloud.vn/media/catalog/product/cache/323c1569b2962717ca2c8faa79ff3a65/q/l/qlbw221082.png',
        category_total: 300
    },
    {
        category_name: 'Đồ bộ',
        category_description: 'Trendy and fashionable clothing items.',
        cagtegory_image: 'https://195designs.com/cdn/shop/products/IMG_6575_clipped_rev_1.png?v=1639390507',
        category_total: 300
    }
];

export {
    sampleCategories,
}