"use client";

import { ClerkProvider, SignIn, useAuth } from "@clerk/nextjs";
import {
  ConvexReactClient,
  Authenticated,
  Unauthenticated,
  AuthLoading,
} from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { FullscreenLoader } from "./fullscreen-loader";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>{children}</Authenticated>
        <Unauthenticated>
          <div className="min-h-dvh flex items-center justify-center">
            <SignIn routing="hash" />
          </div>
        </Unauthenticated>
        <AuthLoading>
          <FullscreenLoader label="Estabelecendo conexão..." />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
