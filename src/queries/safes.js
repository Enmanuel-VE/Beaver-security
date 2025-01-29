import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import getSafes, {
  createSafe,
  deleteSafe,
  editSafe,
} from "../services/supabase/safes";

export const SAFE_KEY = "SAFE_KEY";

export const useGetSafes = () => {
  return useQuery({
    queryFn: getSafes,
    queryKey: [SAFE_KEY],
  });
};

export const useCreateSafe = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createSafe,
    onSuccess: () => {
      queryClient.invalidateQueries([SAFE_KEY]);
    },
  });
};

export const useEditSafe = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editSafe,
    onSuccess: () => {
      queryClient.invalidateQueries([SAFE_KEY]);
    },
  });
};

export const useDeleteSafe = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteSafe,
    onSuccess: () => {
      queryClient.invalidateQueries([SAFE_KEY]);
    },
  });
};
