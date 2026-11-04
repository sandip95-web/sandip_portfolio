"use client";

import { ChevronDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export interface TabItem {
  value: string;
  label: string;
  content: React.ReactNode;
  count?: number;
}

interface ResponsiveTabsProps {
  items: TabItem[];
  defaultValue?: string;
  className?: string;
  tabsListClassName?: string;
}

export function ResponsiveTabs({
  items,
  defaultValue,
  className,
  tabsListClassName,
}: ResponsiveTabsProps) {
  const [activeTab, setActiveTab] = React.useState(
    defaultValue || items[0]?.value
  );
  const activeItem = items.find((item) => item.value === activeTab);

  return (
    <div className={cn("w-full", className)}>
      {/* Mobile: Dropdown */}
      <div className="md:hidden mb-6 flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-full max-w-xs justify-between rounded-xl py-5 font-medium shadow-sm"
            >
              <span>{activeItem?.label || "Select Category"}</span>
              <ChevronDown className="h-4 w-4 opacity-70" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full min-w-[240px]">
            {items.map((item) => (
              <DropdownMenuItem
                key={item.value}
                onClick={() => setActiveTab(item.value)}
                className={cn(
                  "cursor-pointer py-2.5 font-medium",
                  activeTab === item.value && "bg-accent font-semibold text-primary"
                )}
              >
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Desktop: Centered Pills / Tabs */}
      <div className="hidden md:flex justify-center mb-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center">
            <TabsList
              className={cn(
                "inline-flex h-auto p-1.5 flex-wrap justify-center gap-1.5 bg-muted/80 backdrop-blur-sm rounded-xl border border-border shadow-sm",
                tabsListClassName
              )}
            >
              {items.map((item) => (
                <TabsTrigger
                  key={item.value}
                  value={item.value}
                  className="rounded-lg px-5 py-2 font-medium text-sm transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                >
                  {item.label}
                  {item.count !== undefined && (
                    <span className="ml-2 text-xs py-0.5 px-2 rounded-full bg-primary/10 text-primary">
                      {item.count}
                    </span>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {items.map((item) => (
            <TabsContent key={item.value} value={item.value} className="mt-6">
              {item.content}
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Mobile: Content */}
      <div className="md:hidden">{activeItem?.content}</div>
    </div>
  );
}
