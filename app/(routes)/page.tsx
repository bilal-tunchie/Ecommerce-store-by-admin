import getBillboards  from "@/actions/get-billboards"
import getProducts  from "@/actions/get-products"
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list'
import Container from '@/components/ui/container'

export const revalidate = 0;

export default async function HomePage() {
  const billboards = await getBillboards("7f450a3b-ea9a-4121-b27b-496106e26e00");
  const products = await getProducts({isFeatured: true});

  return (
    <Container>
      <div className='space-y-10 pb-20'>
        <Billboard data={billboards}/>
        <ProductList title="Featured Products" items={products}/>
      </div>
    </Container>
  )
}
