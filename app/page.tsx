import { AppSidebar } from "@/components/app-sidebar";
import ToogleThemeButton from "@/components/toogle-theme";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { FolderEdit, Search } from "lucide-react";

import PageClient from "./page.client";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
import DropdownCreatorSelector from "@/components/dropdown-creator-selector";
import UserDropdown from "@/components/user-dropdown";

export default function Page() {
  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <header className="bg-transparent z-50 flex h-16 sticky top-0 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div
            className="absolute inset-0 overflow-visible -z-10"
            style={{
              backgroundImage:
                "radial-gradient(transparent 1px, hsla(var(--background)) 1px)",
              backdropFilter: "blur(3px)",
              backgroundSize: "4px 4px",
              backgroundColor: "transparent",
            }}
          ></div>
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-4" />
          {/* <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb> */}
          <DropdownCreatorSelector />
          <Button size="icon" variant="ghost">
            <FolderEdit />
          </Button>
          <ToogleThemeButton />
          <Button
            className="w-64 rounded-full justify-start px-3 border hover:bg-muted"
            size="icon"
            variant="ghost"
          >
            <Search />
            <span className="text-xs text-muted-foreground">
              Search users or folders...
            </span>
          </Button>
          <UserDropdown />
        </header>
        <div className="flex flex-col gap-4 p-3 pt-0">
          <PageClient />
        </div>
      </SidebarInset>
    </>
  );
}
