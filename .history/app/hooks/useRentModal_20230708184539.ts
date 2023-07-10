import { create } from "zustand";

interface RentModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClsoe: () => void;
}
