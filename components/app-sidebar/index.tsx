"use client";
import * as React from "react";

import { APP_ICON_JSX, ROUTES } from "@/const";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavBasic } from "@/components/app-sidebar/nav-basic";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="h-12 group-data-[collapsible=icon]:!p-0 peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <APP_ICON_JSX className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="font-mono truncate text-3xl tracking-tighter text-primary font-bold">
              BigVault
            </span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavBasic label="You account" items={ROUTES.logged} />
        <NavBasic label="Discover" items={ROUTES.discover} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
