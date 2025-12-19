import { SignIn } from '@clerk/clerk-react';

const GetStarted = () => {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="w-full max-w-md">
          <SignIn
            appearance={{
              elements: {
                headerTitle: "Get Started",
                footerAction: "hidden",
              },
            }}
            path="/get-started"
            routing="path"
            signUpUrl="/get-started"
            redirectUrl="/dashboard"
          />
        </div>
      </div>
    );
}

export default GetStarted