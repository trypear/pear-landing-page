import Link from "next/link";

export default function CreatorTroubleshooting() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto max-w-4xl px-6 pb-16 pt-32">
        <h1 className="mb-4 text-4xl font-bold">
          PearAI Creator (Powered by{" "}
          <a
            href="https://aider.chat/2024/06/02/main-swe-bench.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            aider
          </a>
          *) Troubleshooting
        </h1>

        <div className="mb-8 text-lg text-muted-foreground">
          <p>
            If you&apos;re experiencing any issues with the setup or
            installation of PearAI Creator, you&apos;ll find solutions to common
            problems below. As this feature is currently in beta, we&apos;re
            continuously improving the experience and appreciate your patience
            during this period.
          </p>
        </div>

        {/* Git Repository Error */}
        <div className="mb-8 rounded-xl bg-secondary-300/10 p-6">
          <h2 className="mb-4 text-2xl font-semibold">
            Git Repository Required
          </h2>
          <p className="mb-4">
            If you see the error: &quot;To use PearAI Creator, please open a git
            repository or initialize current workspace directory as a git
            repository&quot;
          </p>
          <div className="bg-secondary mb-4 rounded-lg border-2 border-solid border-input p-4">
            <p className="mb-2">
              <strong>Solution:</strong>
            </p>
            <ol className="list-inside list-decimal">
              <li className="mb-2">Open your terminal or command prompt</li>
              <li className="mb-2">Navigate to your project directory</li>
              <li>Run the following command:</li>
            </ol>
            <pre className="bg-secondary mt-2 rounded-lg border-2 border-solid border-input p-2">
              <span className="font-mono">git init</span>
            </pre>
          </div>
        </div>

        {/* Manual Installation Instructions */}
        <div className="mb-8 rounded-xl bg-secondary-300/10 p-6">
          <h2 className="mb-4 text-2xl font-semibold">
            Manual Installation Instructions
          </h2>
          <p className="mb-4">
            If you see that aider failed automatic installation, follow these
            steps to manually install it:
          </p>

          {/* MacOS Instructions */}
          <div className="rounded-xl bg-secondary-300/10 p-6">
            <h3 className="mb-2 text-xl font-semibold">For macOS/Linux:</h3>
            <ol className="list-inside list-decimal">
              <li className="mb-4">
                <strong>Open a new terminal window</strong>
              </li>
              <li className="mb-2">
                <strong>Install Homebrew (if not already installed) - </strong>{" "}
                Run:
                <pre className="bg-secondary mt-1 rounded-lg border-2 border-solid border-input p-2">
                  <span className="block overflow-x-auto whitespace-nowrap font-mono">
                    /bin/bash -c &quot;$(curl -fsSL
                    https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;
                  </span>
                </pre>
              </li>
              <li className="mb-2">
                <strong>Install Python (if not already installed) - </strong>{" "}
                Run:
                <pre className="bg-secondary mt-1 rounded-lg border-2 border-solid border-input p-2">
                  <span className="font-mono">brew install python@3</span>
                </pre>
              </li>
              <li className="mb-2">
                <strong>Install pipx (if not already installed)</strong>
                <pre className="bg-secondary mt-1 rounded-lg border-2 border-solid border-input p-2">
                  <span className="font-mono">brew install pipx</span>
                </pre>
              </li>
              <li className="mb-2">
                <strong>Ensure pipx is in your PATH</strong>
                <pre className="bg-secondary mt-1 rounded-lg border-2 border-solid border-input p-2">
                  <span className="font-mono">
                    sudo pipx ensurepath --global
                  </span>
                </pre>
              </li>
              <li className="mb-2">
                <strong>Install aider - </strong> Please run:
                <pre className="bg-secondary mt-1 rounded-lg border-2 border-solid border-input p-2">
                  <span className="font-mono">pipx install aider-chat</span>
                </pre>
              </li>
              <li>
                <strong>Finally, please restart PearAI</strong>
              </li>
            </ol>
          </div>

          {/* Windows Instructions */}
          <div className="mt-4 rounded-xl bg-secondary-300/10 p-6">
            <h3 className="mb-2 text-xl font-semibold">For Windows:</h3>
            <ol className="list-inside list-decimal">
              <li className="mb-2">
                <strong>Open a Command Prompt or PowerShell window</strong>
              </li>
              <li className="mb-2">
                <strong>Install Python (if not already installed) - </strong>{" "}
                Run:
                <pre className="bg-secondary mt-1 rounded-lg border-2 border-solid border-input p-2">
                  <span className="font-mono">
                    winget install Python.Python.3.9
                  </span>
                </pre>
              </li>
              <li>
                <strong>Install pipx (if not already installed)</strong>
                <pre className="bg-secondary mt-1 rounded-lg border-2 border-solid border-input p-2">
                  <span className="font-mono">python -m pip install pipx</span>
                </pre>
              </li>
              <li>
                <strong>Ensure pipx is in your PATH</strong>
                <pre className="bg-secondary mt-1 rounded-lg border-2 border-solid border-input p-2">
                  <span className="font-mono">pipx ensurepath</span>
                </pre>
              </li>
              <li className="mb-2">
                <strong>Install aider - </strong> Please run:
                <pre className="bg-secondary mt-1 rounded-lg border-2 border-solid border-input p-2">
                  <span className="font-mono">pipx install aider-chat</span>
                </pre>
              </li>
              <li>
                <strong>Finally, please close and reopen PearAI</strong>
              </li>
            </ol>
          </div>
        </div>

        <div className="rounded-xl bg-secondary-300/10 p-6">
          <p>
            If you followed the above instructions correctly and restarted
            PearAI, then PearAI Creator should work!
            <br />
            If you&apos;re still experiencing issues, please contact PearAI
            Support on{" "}
            <a
              className="text-blue-500 hover:underline"
              href="https://discord.gg/avc2y2Kqsa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
            .
          </p>
        </div>

        <p className="mx-2 mt-8 text-center text-sm text-gray-500">
          *View PearAI{" "}
          <Link
            href="/disclaimer"
            className="text-primary-700 underline hover:text-primary-700/90"
          >
            Disclaimer page
          </Link>
        </p>
      </div>
    </main>
  );
}
