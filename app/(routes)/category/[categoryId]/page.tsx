import getColors from "@/actions/get-colors";
import getOneCategory from "@/actions/get-one-category";
import getProducts  from "@/actions/get-products";
import getSizes  from "@/actions/get-sizes";
import Filter from "@/components/Filter";
import MobileFilters from "@/components/mobile-filters";
import RemoveFilter from "@/components/remove-filter";
import Billboard from "@/components/billboard";
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';

export const revalidate = 0;

interface CategoryProps {
    params: { 
        categoryId: string 
    },
    searchParams: {
        colorId: String,
        sizeId: string
    }
}

const CategoryPage:React.FC<CategoryProps> = async({params, searchParams}) => {
    
    const products = await getProducts({
        categoryId: params.categoryId,
        sizeId: searchParams.sizeId,
        colorId: searchParams.colorId?.toString(),
    });

    const category = await getOneCategory(params.categoryId);
    const sizes = await getSizes();
    const colors = await getColors();

    return (
        <div className="">
            <Container>
                <Billboard data={category?.billboard}/>
                <div className="px-4 sm:px-6 pb-24 lg:px-8">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-6"> {/* */}
                        <MobileFilters
                            categoryId={params.categoryId}
                            sizes={sizes}
                            colors={colors}
                        />
                        <div className="hidden lg:block">
                            <RemoveFilter 
                                id={params.categoryId}
                            />
                            <Filter 
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <Filter 
                                valueKey="colorId"
                                name="Colors"
                                data={colors}
                            />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            <ProductList title={products[0]?.category?.name} items={products}/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CategoryPage;