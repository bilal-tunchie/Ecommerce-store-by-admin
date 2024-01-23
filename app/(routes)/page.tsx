import getBillboards  from "@/actions/get-billboards"
import getProducts  from "@/actions/get-products"
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list'
import Container from '@/components/ui/container'

export const revalidate = 0;

export default async function HomePage() {
  const billboards = await getBillboards("d8bd31eb-1ab9-4940-9b63-d686cd2a1647");
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
