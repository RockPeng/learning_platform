import { Bell } from "lucide-react";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Suspense } from "react";
import { Navbar } from "@/components/nav/navbar";

export function SiteHeader() {
  return (
    <header className="vertex-site-header">
      <Navbar active="none" className="vertex-site-header__nav" />
      <div className="vertex-site-header__actions">
        <button className="vertex-site-header__notification" type="button" aria-label="Notifications">
          <Bell size={20} aria-hidden="true" />
        </button>
        <Suspense fallback={<div className="vertex-auth-placeholder" aria-hidden="true" />}>
          <Show when="signed-out">
            <div className="vertex-auth-controls">
              <SignInButton mode="redirect">
                <button className="vertex-auth-button vertex-auth-button--secondary" type="button">
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton mode="redirect">
                <button className="vertex-auth-button vertex-auth-button--primary" type="button">
                  Sign up
                </button>
              </SignUpButton>
            </div>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </Suspense>
      </div>
    </header>
  );
}
