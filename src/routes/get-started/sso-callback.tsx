import { ClerkLoaded, ClerkLoading } from '@clerk/clerk-react';
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/get-started/sso-callback')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <ClerkLoading>Signing you in…</ClerkLoading>
      <ClerkLoaded>
        <Outlet />
      </ClerkLoaded>
    </>
  );
}
