import axios from "axios";
import getCurrentUser from "../actions/getCurrentUser";
import useLoginModal from "./useLoginModal";

import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

import { SafeUser } from "../types";

interface IUseFacorite {
  listingId: string;
  currentUser?: SafeUser | null;
}
