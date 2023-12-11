import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function Home() {
  const { isLoading, data } = useQuery({
    queryKey: ["get-users"],
    queryFn: async () => {
      const resp = await fetch("/api/users");
      return resp.json();
    },
  });
  const { mutate, isLoading: isMutating } = useMutation({
    mutationFn: async () => {
      const resp = await fetch("/api/add");
      return resp.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["get-users"]);
    },
  });
  const queryClient = useQueryClient();
  if (isLoading) {
    return <p>loading...</p>;
  }
  return (
    <>
      <section className="flex justify-between p-20">
        <div className="border-2 border-blue-700">
          <h1>all users in supabase</h1>
          {JSON.stringify(data)}
        </div>
        <div className="border-2 border-blue-700">
          <button
            disabled={isMutating}
            className="btn"
            onClick={() => {
              mutate();
            }}
          >
            add one user
          </button>
        </div>
      </section>
    </>
  );
}
