import getProducts from "@/actions/get-products";
import getOneProduct from "@/actions/get-one-product";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import Gallery from "@/components/gallery";
import Info from "@/components/Info";


const ProductPage = async ({
    params
}: { params: { productId: string}}) => {

    const { productId } = params;

    const product = await getOneProduct(productId)
    // @ts-ignore
    const suggestedProducts = await getProducts({ categoryId: product?.category?.id});

    return (
        <div className="">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        <Gallery images={product.images}/>
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            <Info data={product}/>
                        </div>
                    </div>
                    <hr className="my-10"/>
                    <ProductList title={'YOU MAY ALSO LIKE'} items={suggestedProducts}/>
                </div>
            </Container>
        </div>
    )
}

export default ProductPage;