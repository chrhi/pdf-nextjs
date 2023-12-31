import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";

import { dashboardConfig } from "@/config/dashboard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarNav } from "@/components/sidebar-nav";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await currentUser();

  if (!user) {
    redirect("/signin");
  }

  return (
    <MaxWidthWrapper>
      <div className="flex min-h-screen flex-col">
        <div className=" flex-1  items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <aside className="fixed    hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
            <ScrollArea className="py-6  lg:py-8">
              <SidebarNav items={dashboardConfig.sidebarNav} className="p-1" />
            </ScrollArea>
          </aside>
          <main className="flex w-full flex-col overflow-hidden">
            {children}
          </main>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
