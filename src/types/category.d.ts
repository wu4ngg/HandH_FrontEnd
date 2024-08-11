export interface ICategory {
    category_name: string,
    category_description: string,
    cagtegory_image: string,
    category_total: number
}


export const sampleCategories: ICategory[] = [
    {
        category_name: 'Áo đầm',
        category_description: 'Latest gadgets and electronics.',
        category_image: 'https://png.pngtree.com/png-vector/20220304/ourmid/pngtree-women-s-party-dress-no-background-png-image_4476818.png',
        category_total: 150
    },
    {
        category_name: 'Áo',
        category_description: 'A wide range of books from various genres.',
        category_image: 'https://product.hstatic.net/1000360022/product/id-009311_70121de93add46e4aece989c1aabcd07_master.png',
        category_total: 200
    },
    {
        category_name: 'Quần',
        category_description: 'Trendy and fashionable clothing items.',
        category_image: 'https://owen.cdn.vccloud.vn/media/catalog/product/cache/323c1569b2962717ca2c8faa79ff3a65/s/v/sv242436.png',
        category_total: 300
    },
    {
        category_name: 'Đồ bộ',
        category_description: 'Trendy and fashionable clothing items.',
        category_image: 'https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-christmas-pajama-png-image_6885804.png',
        category_total: 300
    }
];