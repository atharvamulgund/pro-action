import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import ClerkProvider from '../integrations/clerk/provider'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'
import { Toaster } from '@/components/ui/sonner'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },

      // Responsive
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },

      // Primary SEO
      {
        title: "ProAction — Beat Procrastination with AI",
      },
      {
        name: "description",
        content:
          "ProAction helps you break procrastination using AI-generated action plans tailored to your deadlines, motivation, and obstacles.",
      },

      // Theme
      {
        name: "theme-color",
        content: "#020617", // slate-950
      },

      // Open Graph (LinkedIn, WhatsApp, Slack)
      {
        property: "og:title",
        content: "ProAction — Beat Procrastination with AI",
      },
      {
        property: "og:description",
        content:
          "Turn procrastination into action with personalized AI-generated execution plans.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://proaction.app", // change later
      },
      {
        property: "og:image",
        content: "/og-image.png", // add later
      },

      // Twitter
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "ProAction — Beat Procrastination with AI",
      },
      {
        name: "twitter:description",
        content:
          "AI-powered action plans that help you stop procrastinating and start executing.",
      },
      {
        name: "twitter:image",
        content: "/og-image.png",
      },
    ],

    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  }),

  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <ClerkProvider>
          {/* <Header /> */}
          {children}
          <Toaster richColors />
          <TanStackDevtools
            config={{
              position: "bottom-right",
            }}
            plugins={[
              {
                name: "Tanstack Router",
                render: <TanStackRouterDevtoolsPanel />,
              },
              TanStackQueryDevtools,
            ]}
          />
        </ClerkProvider>
        <Scripts />
      </body>
    </html>
  );
}
