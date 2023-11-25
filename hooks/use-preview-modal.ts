import { create } from 'zustand';
import { Product } from '@/types';

interface PreviewModalStore {
    isOpen: boolean;
    data?: Product;
    OnOpen:(data: Product) => void;
    OnClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
    isOpen: false,
    data: undefined,
    OnOpen: (data: Product) => set({ data, isOpen: true }),
    OnClose: () => set({isOpen: false})
}))

export default usePreviewModal;