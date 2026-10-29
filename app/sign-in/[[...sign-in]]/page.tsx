import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      {/* Left panel - visible on large screens */}
      <div className="hidden lg:flex flex-col justify-center bg-bg-surface border-r border-border-default p-12">
        <div className="max-w-md">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-text-primary tracking-tight">
              ghost AI
            </h1>
            <p className="mt-2 text-text-secondary text-lg">
              Your intelligent coding companion
            </p>
          </div>

          {/* Tagline */}
          <p className="text-text-muted text-base leading-relaxed mb-8">
            Ghost AI helps you write better code faster. Powered by advanced AI
            that understands your codebase.
          </p>

          {/* Feature list */}
          <ul className="space-y-3 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-accent-primary mt-0.5">→</span>
              Smart code completion that adapts to your style
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-primary mt-0.5">→</span>
              Real-time code review and refactoring suggestions
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-primary mt-0.5">→</span>
              Context-aware documentation generation
            </li>
          </ul>
        </div>
      </div>

      {/* Right panel - Clerk form */}
      <div className="flex items-center justify-center p-6">
        <SignIn />
      </div>
    </div>
  );
}
