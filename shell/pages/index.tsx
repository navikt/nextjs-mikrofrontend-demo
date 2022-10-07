import MicrofrontendA from "http://localhost:7100/app-a/bundle.js";
import MicrofrontendB from "http://localhost:7200/app-b/bundle.js";

export default function Home() {
  return (
    <main>
      <MicrofrontendA />
      <MicrofrontendB />
    </main>
  );
}
