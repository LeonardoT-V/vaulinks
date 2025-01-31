import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />

            {children}
          </ThemeProvider>
