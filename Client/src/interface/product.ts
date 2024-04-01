import ICategory from "./category";
import IChuyenMuc from "./chuyenMuc";
interface IProduct {
    createdAt: any;
    _id?: string;
    name: string;
    price: number;
    author: string;
    description: string;
    quantity: number;
    images: any[];
    categoryId?: ICategory,
    chuyenMucId?:IChuyenMuc

}

export default IProduct;