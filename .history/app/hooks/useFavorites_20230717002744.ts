import axios from "axios";
import LoginModal from "../components/modals/LoginModal";
import getCurrentUser from "../actions/getCurrentUser";

import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
