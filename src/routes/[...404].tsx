import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <main class="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 class="text-8xl font-bold text-primary mb-4">404</h1>
      <p class="text-xl text-base-content/70 mb-8">Page not found</p>
      <A href="/" class="btn btn-primary">
        Go Home
      </A>
    </main>
  );
}
