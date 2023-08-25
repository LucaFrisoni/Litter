import { create } from "zustand";

interface EditModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useEditModel = create<EditModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useEditModel;
