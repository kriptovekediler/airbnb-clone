import axios from "axios";
import getCurrentUser from "../actions/getCurrentUser";
import useLoginModal from "./useLoginModal";

import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

import { SafeUser } from "../types";

interface IUseFavorite {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        loginModal.onOpen();
      }

      try {
        let request;

        if (hasFavorited) {
          await axios.delete(`/api/listings/${listingId}`);
        }
      } catch (error) {}
    },
    []
  );
};
