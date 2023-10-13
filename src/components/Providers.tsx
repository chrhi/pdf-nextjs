"use client";

import { FC, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { Next13ProgressBar } from "next13-progressbar";


interface LayoutProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

const Providers: FC<LayoutProps> = ({ children }) => {
  return (
 
      <QueryClientProvider client={queryClient}>
        <>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
            <Next13ProgressBar
              height="2px"
              color="#0044ff"
              options={{ showSpinner: false }}
              showOnShallow
            />
          </ThemeProvider>
        </>
      </QueryClientProvider>

  );
};

export default Providers;
