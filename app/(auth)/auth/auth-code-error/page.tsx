import AuthCodeErrorComponent from "@/components/auth/auth-error";
import { Suspense } from "react";

const AuthCodeError = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthCodeErrorComponent />
    </Suspense>
  );
};

export default AuthCodeError;
