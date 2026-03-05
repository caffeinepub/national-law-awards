import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useNominationCount() {
  const { actor, isFetching } = useActor();
  return useQuery<bigint>({
    queryKey: ["nominationCount"],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      return actor.getNominationCount();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitNomination() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      submitterName,
      organizationName,
      awardCategory,
      nomineeDescription,
    }: {
      submitterName: string;
      organizationName: string;
      awardCategory: string;
      nomineeDescription: string;
    }) => {
      if (!actor) throw new Error("Not connected to backend");
      return actor.submitNomination(
        submitterName,
        organizationName,
        awardCategory,
        nomineeDescription,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["nominationCount"] });
    },
  });
}
