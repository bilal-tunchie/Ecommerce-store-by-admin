import Link from 'next/link'

import NavbarActions from '@/components/NavbarActions'
import Container from '@/components/ui/container'
import MainNav from '@/components/ui/mainNav'
import getStore  from "@/actions/get-store"
import getCategories  from "@/actions/get-categories"

export default async function Navbar() {
    const store = await getStore();
    const categories = await getCategories();

    return (
        <div className='mx-auto py-10'>
            <Container>
                <div className='relative flex px-4 sm:px-6 lg:px-8 items-center'>
                    <Link href="/" className='ml-4 flex lg:ml-8 gap-x-2'>
                        <p className='font-bold text-xl'>{store[0]?.name.toUpperCase()}</p>
                    </Link>
                    <MainNav data={categories}/>
                    <NavbarActions /> 
                </div>
            </Container>
        </div>
    )
}
