import { AppSidebar } from "@/components/app-sidebar";
import SearchPageUrl from "@/components/search-page-url";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { FolderEdit, Search } from "lucide-react";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 sticky top-0 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
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
            </Breadcrumb>
          </div>
          <Button size="icon" variant="secondary">
            <FolderEdit />
          </Button>
          <Button
            className="w-64 rounded-full justify-start pl-3"
            size="icon"
            variant="secondary"
          >
            <Search />
            <span className="text-xs text-muted-foreground">
              Search users or folders...
            </span>
          </Button>
        </header>
        <div className="flex flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-card aspect-video rounded-xl" />
            <div className="aspect-video rounded-xl bg-card" />
            <div className="aspect-video rounded-xl bg-card" />
            <h1 className="font-medium">hola</h1>
          </div>
          <div className="aspect-video rounded-xl bg-card">
            <SearchPageUrl />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
