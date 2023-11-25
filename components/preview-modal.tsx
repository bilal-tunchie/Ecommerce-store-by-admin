"use client"

import Modal from '@/components/ui/modal'
import usePreviewModal from '@/hooks/use-preview-modal'
import Gallery from './gallery'
import Info from '@/components/Info'

const PreviewModal = () => {
    const previewModal = usePreviewModal()
    const product = usePreviewModal((state) => state.data)

    if (!product) null;

    return (
        <Modal
            open={previewModal.isOpen}
            onClose={previewModal.OnClose}
        >
            <div className="grid grid-cols-1 w-full items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-">
                <div className="sm:col-span-4 lg:col-span-5">
                    {/* @ts-ignore */}
                    <Gallery images={product?.images}/>
                </div>
                <div className='sm:col-span-8 lg:col-span-7'>
                    {/* @ts-ignore */}
                    <Info data={product}/>
                </div>
            </div>
        </Modal>
    )
}

export default PreviewModal