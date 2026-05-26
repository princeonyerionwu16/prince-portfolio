import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    notFoundComponent: () => (
      <div className="flex h-screen flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-4 text-xl text-muted-foreground italic">
          This page has vanished into the aurora.
        </p>
        <a href="/" className="mt-8 rounded-full bg-primary px-6 py-2 text-primary-foreground transition-opacity hover:opacity-90">
          Return Home
        </a>
      </div>
    ),
  });

  return router;
};

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
