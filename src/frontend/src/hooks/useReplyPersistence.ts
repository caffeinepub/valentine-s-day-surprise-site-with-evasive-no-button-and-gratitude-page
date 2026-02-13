import { useActor } from './useActor';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const REPLY_QUERY_KEY = 'existingReply';

export function useReplyPersistence() {
  const { actor, isFetching: isActorFetching } = useActor();
  const queryClient = useQueryClient();

  // Fetch existing reply
  const replyQuery = useQuery<string>({
    queryKey: [REPLY_QUERY_KEY],
    queryFn: async () => {
      if (!actor) return '';
      return await actor.getExistingReply();
    },
    enabled: !!actor && !isActorFetching,
  });

  // Save reply mutation
  const saveMutation = useMutation({
    mutationFn: async (reply: string) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.submitReply(reply);
    },
    onSuccess: () => {
      // Invalidate and refetch the reply query
      queryClient.invalidateQueries({ queryKey: [REPLY_QUERY_KEY] });
    },
  });

  return {
    loadedReply: replyQuery.data || '',
    isLoading: replyQuery.isLoading,
    save: (reply: string) => saveMutation.mutate(reply),
    isSaving: saveMutation.isPending,
    isError: saveMutation.isError,
    isSuccess: saveMutation.isSuccess,
    error: saveMutation.error,
  };
}
