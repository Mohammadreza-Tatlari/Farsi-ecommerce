import {create} from 'zustand';

interface useModalStoreADProps{
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
}

const useModalStoreAD = create<useModalStoreADProps>((set) => ({
    isOpen: false,
    onClose: () => set({isOpen: false}),
    onOpen: () => set({isOpen: true}),
}))

export default useModalStoreAD;