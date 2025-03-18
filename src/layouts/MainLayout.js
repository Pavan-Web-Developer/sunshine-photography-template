"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MainLayout({ children }) {
  const pathname = usePathname().toLowerCase();
  const router = useRouter();

  useEffect(() => {
    if (pathname.startsWith("/admin")) {
      return;
    }

    if (!pathname.startsWith("/in") && !pathname.startsWith("/uk")) {
      router.push(`/IN${pathname}`);
    }
  }, [pathname, router]);

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            retry: 1,
          },
        },
      })
  );

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
