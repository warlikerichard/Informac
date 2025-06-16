'use client';

import { useSearchParams } from 'next/navigation';

export default function AuthError() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Authentication Error</h1>
        <p className="text-gray-600">
          {error === 'Configuration' && 'There is a problem with the server configuration.'}
          {error === 'AccessDenied' && 'You do not have permission to sign in.'}
          {error === 'Verification' && 'The verification token has expired or has already been used.'}
          {!error && 'An error occurred during authentication.'}
        </p>
        <a
          href="/"
          className="mt-4 inline-block text-blue-600 hover:text-blue-800"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
} 