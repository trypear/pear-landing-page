export const posts = [
  {
    title: "How We Designed Our Servers at PearAI",
    author: "Nang",
    date: "2024-09-1",
    excerpt:
      "I spent the last 2 months working on PearAI, an Open-Sourced AI-Powered Code Editor. It is like having an expert on your codebase right next to you. We achieve this with Retrieval Augmented Generation. This is my new startup after finishing my B.S. & M.S from Carnegie Mellon and working for 1.5 years in High Frequency Trading as a Software Engineer. This is exactly how we designed our server.",
    thumbnail: "/images/blog/pearai-server-option.png",
    tags: ["server", "server design", "pearai server"],
    url: "/blog/how-we-designed-our-servers-end-to-end-for-pearai",
    content: `<div
  class="mx-auto max-w-4xl space-y-8 px-4 py-8 text-gray-800 dark:text-gray-200 sm:px-6 lg:px-8"
>
  <p class="text-base font-light leading-relaxed sm:text-lg md:text-xl">
    I spent the last 2 months working on PearAI, an Open-Sourced AI-Powered Code
    Editor. It's like having an expert on your codebase right next to you. We
    achieve this with Retrieval Augmented Generation. This is my new startup
    after finishing my B.S. & M.S from Carnegie Mellon and working for 1.5 years
    in High Frequency Trading as a Software Engineer. Here's exactly how we
    designed our server.
  </p>

  <figure class="my-8 sm:my-12">
    <img
      src="/images/blog/pear-hanging-from-branch.png"
      alt="Pear hanging from branch"
      class="w-full rounded-xl shadow-lg"
    />
    <figcaption
      class="mt-4 text-center text-sm italic text-gray-600 dark:text-gray-400"
    >
      PearAI: An AI-Powered Code Editor
    </figcaption>
  </figure>

  <p class="text-base sm:text-lg">
    We are launching our product next week, and we needed to build out our
    server this last month. As we're building fully in public, here's exactly
    how we did it. Hopefully, this helps you design a server with scalability,
    resilience, and security in mind.
  </p>

  <figure class="my-8 sm:my-12">
    <img
      src="/images/blog/pearai-server-option.png"
      alt="PearAI Server Options"
      class="w-full rounded-xl shadow-lg"
    />
    <figcaption
      class="mt-4 text-center text-sm italic text-gray-600 dark:text-gray-400"
    >
      PearAI Server Architecture Options
    </figcaption>
  </figure>

  <h2
    class="mb-4 mt-8 text-2xl font-bold text-primary-600 dark:text-primary-400 sm:mb-6 sm:mt-12 sm:text-3xl"
  >
    What's this server for?
  </h2>

  <p class="mb-4 text-base sm:text-lg">
    PearAI offers two different services for LLM:
  </p>

  <ol
    class="ml-4 list-inside list-decimal space-y-4 text-base sm:ml-6 sm:text-lg"
  >
    <li class="pl-2">
      <span class="font-semibold">Use PearAI's hosted server:</span> Pay
      subscription for unlimited usage. Underlying LLM is abstracted for
      convenience and latest AI technology.
    </li>
    <li class="pl-2">
      <span class="font-semibold">Use API key:</span> Users self-manage and pay
      per token to the LLM Provider. On PearAI's side, this is Open-sourced and
      fully transparent. Users can also use their own local LLM.
    </li>
  </ol>

  <h2
    class="mb-4 mt-8 text-2xl font-bold text-primary-600 dark:text-primary-400 sm:mb-6 sm:mt-12 sm:text-3xl"
  >
    Our Server Functionalities
  </h2>

  <ul class="ml-4 grid grid-cols-2 gap-2 text-base sm:ml-6 sm:gap-4 sm:text-lg">
    <li class="pl-2">1. Authentication</li>
    <li class="pl-2">2. Database</li>
    <li class="pl-2">3. Proxying</li>
    <li class="pl-2">4. Observability</li>
    <li class="pl-2">5. Payment</li>
    <li class="pl-2">6. Deployment</li>
  </ul>

  <h2
    class="mb-4 mt-8 text-2xl font-bold text-primary-600 dark:text-primary-400 sm:mb-6 sm:mt-12 sm:text-3xl"
  >
    0. Never Start From Scratch
  </h2>

  <p class="text-base sm:text-lg">
    I'm a big fan of creating my own templates and never starting from scratch
    again. I open-source all of these, and you can find the Flask API Template I
    made/used for this project here:
    <a
      href="https://github.com/nathan-149/flask-backend-api-template"
      class="font-medium text-blue-600 hover:underline dark:text-blue-400"
      >Flask Backend API Template</a
    >
  </p>

  <div
    class="my-6 rounded-r-lg border-l-4 border-yellow-500 bg-yellow-100 p-4 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 sm:my-8 sm:p-6"
  >
    <p class="mb-2 text-base font-bold sm:text-lg">Edit:</p>
    <p class="text-sm sm:text-base">
      DON'T USE FLASK, USE FASTAPI FOR ASYNC CAPABILITIES
    </p>
  </div>

  <h2
    class="mb-4 mt-8 text-2xl font-bold text-primary-600 dark:text-primary-400 sm:mb-6 sm:mt-12 sm:text-3xl"
  >
    1. Authentication
  </h2>

  <p class="mb-4 text-base sm:mb-6 sm:text-lg">
    We needed sign-up and sign-in functionality, as well as JWT tokens for each
    user. For this, we used Supabase, which handles authentication of users.
    This is how we are doing this:
  </p>

  <figure class="my-8 sm:my-12">
    <img
      src="/images/blog/pearai-authentication-flow.png"
      alt="PearAI Authentication Flow"
      class="w-full rounded-xl shadow-lg"
    />
    <figcaption
      class="mt-4 text-center text-sm italic text-gray-600 dark:text-gray-400"
    >
      PearAI Authentication Flow
    </figcaption>
  </figure>

  <div
    class="my-6 rounded-r-lg border-l-4 border-yellow-500 bg-yellow-100 p-4 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 sm:my-8 sm:p-6"
  >
    <p class="mb-2 text-base font-bold sm:text-lg">Edit:</p>
    <p class="text-sm sm:text-base">DON'T USE SUPABASE, USE AUTH0</p>
  </div>
  <!-- Continue with the rest of the sections (2. Database, 3. Proxying, etc.) in a similar fashion -->

  <h2
    class="mb-4 mt-8 text-2xl font-bold text-primary-600 dark:text-primary-400 sm:mb-6 sm:mt-12 sm:text-3xl"
  >
    Summary
  </h2>

  <p class="mb-4 text-base sm:text-lg">
    In summary, this is the stack that we used and I would recommend:
  </p>

  <ul
    class="ml-4 list-inside list-disc space-y-2 rounded-lg bg-gray-100 p-4 text-base dark:bg-gray-800 sm:ml-6 sm:p-6 sm:text-lg"
  >
    <li class="pl-2">
      Primary language: <span class="font-semibold">Python</span>
    </li>
    <li class="pl-2">
      API Framework: <span class="font-semibold">Flask</span>
    </li>
    <li class="pl-2">
      Authentication: <span class="font-semibold">Supabase</span>
    </li>
    <li class="pl-2">Payment: <span class="font-semibold">Stripe</span></li>
    <li class="pl-2">
      Database: <span class="font-semibold">Redis + Supabase (pSQL)</span>
    </li>
    <li class="pl-2">
      Observability: <span class="font-semibold">OpenTelemetry + Axiom</span>
    </li>
    <li class="pl-2">
      Deployment: <span class="font-semibold">DigitalOcean</span>
    </li>
  </ul>

  <p class="mt-6 text-base sm:mt-8 sm:text-lg">
    Hopefully this was helpful to someone. PearAI is open-sourced, so please
    help us out by starring the repo here:
    <a
      href="https://github.com/trypear/pearai-app"
      class="font-medium text-blue-600 hover:underline dark:text-blue-400"
      >PearAI GitHub Repo</a
    >, and consider contributing! If you'd like to use the app, join the wait
    list here
    <a
      href="https://trypear.ai/"
      class="font-medium text-blue-600 hover:underline dark:text-blue-400"
      >https://trypear.ai/</a
    >. We're launching next week to our first batch of users!
  </p>

  <p class="mt-4 text-base sm:mt-6 sm:text-lg">
    Also, feel free to check out my YouTube series on this, as I am documenting
    the entire startup journey with my cofounder
    <a
      href="https://youtube.com/@FryingPan"
      class="font-medium text-blue-600 hover:underline dark:text-blue-400"
      >FryingPan</a
    >.
    <a
      href="https://youtube.com/nang88"
      class="font-medium text-blue-600 hover:underline dark:text-blue-400"
      >https://youtube.com/nang88</a
    >. Thanks!
  </p>
</div>
`,
  },
  {
    title: "Setting Up Auto-Complete On PearAI",
    date: "2024-08-31",
    excerpt:
      "PearAI supports tab autocomplete, and this is how to set this up. Tab autocomplete predicts / suggests what you would type next as you're coding!",
    thumbnail: "/images/blog/codestral.jpg",
    tags: ["autocomplete", "suggestions"],
    url: "/blog/setting-up-auto-complete-on-pearai",
    author: "Nang",
    content: `<div
  class="mx-auto max-w-4xl space-y-8 px-4 py-8 text-gray-800 dark:text-gray-200 sm:px-6 lg:px-8"
>
  <p class="text-base font-light leading-relaxed sm:text-lg md:text-xl">
    PearAI supports tab autocomplete, and this is how to set this up. Tab
    autocomplete predicts/suggests what you would type next as you're coding!
  </p>

  <p class="text-base sm:text-lg">This is the guide to do that:</p>

  <ol
    class="ml-4 list-outside list-decimal space-y-8 text-base sm:ml-6 sm:text-lg"
  >
    <li class="pl-2">
      <h3
        class="mb-2 text-xl font-bold text-primary-600 dark:text-primary-400 sm:mb-4 sm:text-2xl"
      >
        Setup Codestral
      </h3>
      <p class="mt-2">
        We recommend using Codestral, the leading model for code completion (or
        FIM — Fill In Middle). It's also open-sourced! You'll need to obtain a
        Codestral API key from
        <a
          href="https://console.mistral.ai/"
          class="font-medium text-blue-600 hover:underline dark:text-blue-400"
          >Mistral API</a
        >.
      </p>
    </li>

    <li class="pl-2">
      <h3
        class="mb-2 text-xl font-bold text-primary-600 dark:text-primary-400 sm:mb-4 sm:text-2xl"
      >
        Add to PearAI config.json
      </h3>
      <p class="mb-4 mt-2">
        Fill in
        <code class="rounded bg-gray-200 px-2 py-1 dark:bg-gray-700"
          >YOUR_API_KEY</code
        >
        with your API key:
      </p>

      <div class="overflow-x-auto rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <pre class="text-xs sm:text-sm"><code class="language-json">{
    "tabAutocompleteModel": {
      "title": "Codestral",
      "provider": "mistral",
      "model": "codestral-latest",
      "apiKey": "YOUR_API_KEY"
    }
  }</code></pre>
      </div>

      <figure class="my-6 sm:my-8">
        <img
          src="/images/blog/open-pearai-config.png"
          alt="Command Palette in PearAI (Cmd/Ctrl+Shift+P)"
          class="w-full rounded-xl shadow-lg"
        />
        <figcaption
          class="mt-2 text-center text-xs italic text-gray-600 dark:text-gray-400 sm:mt-4 sm:text-sm"
        >
          Command Palette in PearAI (Cmd/Ctrl+Shift+P)
        </figcaption>
      </figure>
    </li>

    <li class="pl-2">
      <h3
        class="mb-2 text-xl font-bold text-primary-600 dark:text-primary-400 sm:mb-4 sm:text-2xl"
      >
        Enjoy the development speed up with autocomplete!
      </h3>
      <p class="mt-2">
        Once you've set up the autocomplete, you'll notice a significant boost
        in your coding speed and efficiency. The AI-powered suggestions will
        help you write code faster and with fewer errors.
      </p>
    </li>
  </ol>

  <div
    class="my-6 rounded-r-lg border-l-4 border-blue-500 bg-blue-100 p-4 text-blue-800 dark:bg-blue-900 dark:text-blue-200 sm:my-8 sm:p-6"
  >
    <p class="mb-2 text-base font-bold sm:text-lg">Pro Tip:</p>
    <p class="text-sm sm:text-base">
      You can customize the autocomplete behavior in PearAI's settings.
      Experiment with different options to find the setup that works best for
      your coding style!
    </p>
  </div>

  <p class="mt-6 text-base sm:mt-8 sm:text-lg">
    Setting up autocomplete in PearAI is a game-changer for your development
    workflow. It combines the power of AI with your coding expertise, resulting
    in faster and more efficient coding sessions. Give it a try and experience
    the difference for yourself!
  </p>
</div>
`,
  },
  {
    title: "Enhancing PearAI with Anthropic's Claude 3.5",
    url: "/blog/enhancing-pearai-with-anthropic-claude-3-5",
    excerpt:
      "How we leveraged Claude 3.5 to improve code syntax and logic in our open-source AI code editor, and the unique challenges we faced in implementation.",
    date: "2024-08-20",
    author: "Conor Quinlan",
    readingTime: "3 min",
    thumbnail: "/images/blog/claude.png",
    tags: ["AI", "Claude 3.5", "PearAI", "Code Editor"],
    content: `<article
  class="mx-auto max-w-4xl space-y-6 px-4 py-8 text-gray-800 dark:text-gray-200 sm:px-6 lg:px-8"
>
  <p class="text-base font-semibold leading-relaxed sm:text-lg md:text-xl">
    At PearAI, we're constantly striving to improve our open-source AI code
    editor. Our latest advancement involves integrating Anthropic's Claude 3.5
    model to enhance code syntax and logic understanding when providing AI
    context to a user's codebase. This integration presented unique challenges
    and opportunities that we're excited to share with you.
  </p>

  <section class="space-y-4">
    <h2
      class="text-xl font-bold text-primary-600 dark:text-primary-400 sm:text-2xl"
    >
      Why Claude 3.5?
    </h2>
    <p class="text-sm sm:text-base">
      Claude 3.5 offers significant improvements in natural language
      understanding and code comprehension. By leveraging this model, we aimed
      to:
    </p>
    <ul class="list-disc space-y-2 pl-4 text-sm sm:pl-6 sm:text-base">
      <li>Enhance the accuracy of code suggestions and completions</li>
      <li>
        Improve the AI's understanding of complex code structures and logic
      </li>
      <li>
        Provide more context-aware responses to user queries about their
        codebase
      </li>
    </ul>
  </section>

  <section class="space-y-4">
    <h2
      class="text-xl font-bold text-primary-600 dark:text-primary-400 sm:text-2xl"
    >
      The Implementation Challenge
    </h2>
    <p class="text-sm sm:text-base">
      One of the main hurdles we faced was adapting our existing infrastructure
      to work with Claude 3.5. Unlike other LLMs we've used, such as OpenAI's
      models, Claude 3.5 required a different approach to prompt handling:
    </p>
    <ul class="list-disc space-y-2 pl-4 text-sm sm:pl-6 sm:text-base">
      <li>Our existing setup handled server prompts from the client-side</li>
      <li>
        Claude 3.5 needed server-side prompt handling for optimal performance
        and security
      </li>
      <li>
        This discrepancy required us to rethink our architecture for Anthropic
        integration specifically
      </li>
    </ul>
  </section>

  <section class="space-y-4">
    <h2
      class="text-xl font-bold text-primary-600 dark:text-primary-400 sm:text-2xl"
    >
      Our Solution
    </h2>
    <p class="text-sm sm:text-base">
      To address this challenge, we implemented a hybrid approach:
    </p>
    <ol class="list-decimal space-y-2 pl-4 text-sm sm:pl-6 sm:text-base">
      <li>
        We maintained our client-side handling for existing LLMs to ensure
        backwards compatibility
      </li>
      <li>
        For Claude 3.5, we developed a new server-side handler specifically for
        Anthropic API calls
      </li>
      <li>
        We created a routing mechanism to direct requests to the appropriate
        handler based on the selected AI model
      </li>
    </ol>
    <p class="mt-3 text-sm sm:text-base">
      This solution allowed us to leverage Claude 3.5's capabilities while
      maintaining support for our other AI models.
    </p>
  </section>

  <section class="space-y-4">
    <h2
      class="text-xl font-bold text-primary-600 dark:text-primary-400 sm:text-2xl"
    >
      Benefits of the Integration
    </h2>
    <p class="text-sm sm:text-base">
      The integration of Claude 3.5 has brought several improvements to PearAI:
    </p>
    <ul class="list-disc space-y-2 pl-4 text-sm sm:pl-6 sm:text-base">
      <li>More accurate and context-aware code suggestions</li>
      <li>
        Improved understanding of complex codebases, leading to better responses
        to user queries
      </li>
      <li>Enhanced ability to explain code logic and suggest optimizations</li>
      <li>
        Faster processing of large codebases due to Claude 3.5's efficient
        architecture
      </li>
    </ul>
  </section>

  <blockquote
    class="border-l-4 border-primary-500 pl-4 text-sm italic text-gray-700 dark:text-gray-300 sm:text-base"
  >
    "The integration of Claude 3.5 has significantly elevated PearAI's
    capabilities, allowing us to provide an even more powerful and intuitive
    coding experience for our users." - Nang, PearAI Founder
  </blockquote>

  <section class="space-y-4">
    <h3
      class="text-lg font-bold text-primary-600 dark:text-primary-400 sm:text-xl"
    >
      Looking Ahead
    </h3>
    <p class="text-sm sm:text-base">
      With Claude 3.5 successfully integrated, we're now focusing on:
    </p>
    <ul class="list-disc space-y-2 pl-4 text-sm sm:pl-6 sm:text-base">
      <li>
        Further optimizing the interaction between our editor and the Claude 3.5
        model
      </li>
      <li>
        Developing new features that leverage Claude 3.5's advanced language
        understanding
      </li>
      <li>
        Exploring ways to combine Claude 3.5 with other AI models for even
        better results
      </li>
    </ul>
  </section>

  <p class="mt-6 text-base font-semibold sm:text-lg">
    We're excited about the possibilities that Claude 3.5 brings to PearAI and
    look forward to continuing our journey of making AI-assisted coding more
    powerful and accessible. Stay tuned for more updates and features as we push
    the boundaries of what's possible in AI-powered code editing!
  </p>
</article>
`,
  },

  {
    title: "Install PearAI on Linux: Simple Guide for All Distros",
    url: "/blog/download-pearai-on-linux",
    excerpt:
      "An easy-to-follow guide for downloading and installing PearAI on a wide range of Linux distributions, ensuring a smooth setup for both beginners and experienced users.",
    date: "2024-09-11",
    author: "Maximiliano Farfán",
    readingTime: "2 min",
    thumbnail: "/images/blog/linux.jpg",
    tags: ["Guide", "PearAI", "Linux"],
    content: `<article
  class="mx-auto max-w-4xl space-y-6 px-4 py-8 text-gray-800 dark:text-gray-200 sm:px-6 lg:px-8"
>
  <section class="space-y-4">
    <h2
      class="text-xl font-bold text-primary-600 dark:text-primary-400 sm:text-2xl"
    >
      Download PearAI on Linux
    </h2>
    <ol class="list-decimal space-y-4 pl-4 text-sm sm:pl-6 sm:text-base">
      <li>
        Download the compressed PearAI installation file:
        <a
          href="https://pearai-app.nyc3.digitaloceanspaces.com/PearAI-latest/linux/PearAI.tar.gz"
          class="break-words text-primary-500 underline dark:text-primary-400"
          >Download PearAI</a
        >
      </li>
      <li>
        Extract the contents by running the following command:
        <pre
          class="mt-2 overflow-x-auto rounded bg-gray-100 p-2 text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200 sm:text-sm md:text-base"
        ><code>tar -xvf PearAI.tar.gz</code></pre>
      </li>
      <li>
        Navigate to the extracted folder:
        <pre
          class="mt-2 overflow-x-auto rounded bg-gray-100 p-2 text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200 sm:text-sm md:text-base"
        ><code class="language-bash">cd PearAI/</code></pre>
      </li>
      <li>
        Run the installation script with superuser permissions:
        <pre
          class="mt-2 overflow-x-auto rounded bg-gray-100 p-2 text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200 sm:text-sm md:text-base"
        ><code class="language-bash">sudo ./pearai_manager.sh</code></pre>
      </li>
      <li>
        Select your desired option:
        <pre
          class="mt-2 overflow-x-auto rounded bg-gray-100 p-2 text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200 sm:text-sm md:text-base"
        ><code class="language-bash">1. Install PearAI
2. Uninstall PearAI
3. Exit</code></pre>
      </li>
      <li>
        Add the following alias to your
        <code class="rounded bg-gray-200 px-1 text-gray-800 dark:bg-gray-700 dark:text-gray-200">~/.bashrc</code>
        or
        <code class="rounded bg-gray-200 px-1 text-gray-800 dark:bg-gray-700 dark:text-gray-200">~/.zshrc</code>
        to run PearAI from any directory:
        <pre
          class="mt-2 overflow-x-auto rounded bg-gray-100 p-2 text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200 sm:text-sm md:text-base"
        ><code class="language-bash">alias pearai='PearAI'</code></pre>
        After adding the alias, run
        <code class="rounded bg-gray-200 px-1 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
          >source ~/.bashrc</code
        >
        or
        <code class="rounded bg-gray-200 px-1 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
          >source ~/.zshrc</code
        >
        to apply the changes.
      </li>
    </ol>
  </section>

  <section class="mt-8 space-y-4">
    <h2
      class="text-xl font-bold text-primary-600 dark:text-primary-400 sm:text-2xl"
    >
      Notes
    </h2>
    <p class="text-sm sm:text-base">
      Once the installation is complete, PearAI will be ready to use! If you
      have any questions or run into issues, feel free to join our community and
      get support through our official
      <a
        href="https://discord.gg/7QMraJUsQt"
        class="text-primary-500 underline dark:text-primary-400"
        >Discord server</a
      >.
    </p>
    <p class="mt-4 text-sm sm:text-base">
      This installation method has been tested on multiple Linux distributions,
      including Arch Linux, Ubuntu 24, and Fedora 40. It was compiled using GCC
      14, so most distributions with this or an older version should be able to
      run PearAI without any issues.
    </p>
  </section>

  <p class="mt-8 text-base font-semibold sm:text-lg">
    We're thrilled to bring PearAI to the Linux community, stay tuned for more
    exciting updates and features on the horizon!
  </p>
</article>
`,
  },

  {
    title: "How to use GPT o1-mini and o1-preview in PearAI",
    url: "/blog/gpt-o1",
    excerpt:
      "Learn how to integrate and effectively use GPT o1-mini and o1-preview models in PearAI, along with important considerations for optimal usage.",
    date: "2024-09-15",
    author: "Duke Pan",
    readingTime: "3 min",
    thumbnail: "/images/blog/o1-doc-thumbnail.webp",
    tags: ["Guide", "PearAI", "GPT", "OpenAI", "o1-mini", "o1-preview"],
    content: `<article
  class="mx-auto max-w-4xl space-y-8 px-4 py-8 text-gray-800 dark:text-gray-200 sm:px-6 lg:px-8"
>
  <section class="space-y-6">
    <h2
      class="text-xl font-bold text-primary-600 dark:text-primary-400 sm:text-2xl"
    >
      Adding GPT o1-mini and o1-preview to PearAI
    </h2>
    <ol class="list-decimal space-y-4 pl-4 text-sm sm:pl-6 sm:text-base">
      <li>
        Open your
        <code class="rounded bg-gray-200 px-1 dark:bg-gray-700"
          >config.json</code
        >
        file in PearAI through the command palette (<kbd
          class="rounded bg-gray-300 px-1 text-xs dark:bg-gray-600 sm:text-sm"
          >Ctrl/Cmd+Shift+P</kbd
        >).
      </li>
      <li>
        Add the following entries to the "models" array of your config and save
        the file (see example picture below):
       <pre
          class="mt-2 overflow-x-auto rounded bg-gray-100 p-2 text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200 sm:text-sm md:text-base"
        ><code class="language-bash">{
    "model": "o1-mini",
    "title": "GPTo1 Mini (PearAI)",
    "provider": "pearai_server",
    "isDefault": true
  },
  {
    "model": "o1-preview",
    "title": "GPTo1 Preview (PearAI)",
    "provider": "pearai_server",
    "isDefault": true
  }</code></pre>
      </li>
      <li class="font-semibold">Example</li>
    </ol>
    <figure class="mt-4">
      <img
        src="/images/blog/o1config-doc.png"
        alt="Command Palette in PearAI (Cmd/Ctrl+Shift+P)"
        class="w-full rounded-xl shadow-lg"
      />
      <figcaption
        class="mt-2 text-center text-xs text-gray-600 dark:text-gray-400 sm:text-sm"
      >
        Config.json example with o1 models added
      </figcaption>
    </figure>
  </section>

  <section class="space-y-4">
    <h2
      class="text-xl font-bold text-primary-600 dark:text-primary-400 sm:text-2xl"
    >
      Usage Considerations
    </h2>
    <ul class="list-disc space-y-2 pl-4 text-sm sm:pl-6 sm:text-base">
      <li>
        Rate limits provided by OpenAI for these o1 models are currently lower
        compared to other options. For most tasks, it's still recommended to use
        Claude or GPT4o instead of o1 models due to these limitations.
      </li>
      <li>
        When choosing between o1 models, prefer o1-mini over o1-preview. It will
        use fewer of your credits while providing similar performance.
      </li>
      <li>
        Due to current rate limits, only annual subscribers of PearAI can use o1
        models. We'll open it up to all subscribers soon!
      </li>
    </ul>
  </section>
</article>
`,
  },
  {
    title:
      "New Leetcode Feature in PearAI - Supercharge Your Interview Prep With AI",
    url: "/blog/introducing-leetcode-feature",
    excerpt:
      "Improve your coding skills and interview readiness with PearAI's LeetCode integration. A practical tool for efficient technical interview preparation.",
    date: "2024-09-15",
    author: "PearAI Team",
    readingTime: "4 min",
    thumbnail: "/images/leetcode.png",
    tags: [
      "leetcode",
      "interview preparation",
      "coding challenges",
      "job hunting",
      "swe jobs",
    ],
    content: `<article class="mx-auto max-w-4xl space-y-8 px-4 py-8 text-gray-800 dark:text-gray-200 sm:px-6 lg:px-8">
      <section class="space-y-6">
        <h2 class="text-xl font-bold text-primary-600 dark:text-primary-400 sm:text-2xl">
          A Practical Tool for Interview Readiness
        </h2>
        <p>
          At PearAI, we're always looking for ways to support developers in their professional growth. Today, we're introducing our latest feature: the LeetCode Slash Command. This integration brings LeetCode problems directly into your PearAI workspace, offering a streamlined approach to technical interview preparation.
        </p>
        <p>
          The LeetCode Slash Command is designed to complement your existing interview preparation routine. By providing easy access to LeetCode problems within PearAI, it helps you practice more efficiently and consistently.
        </p>
      </section>

      <section class="space-y-6">
        <h2 class="text-xl font-bold text-primary-600 dark:text-primary-400 sm:text-2xl">
          How It Works
        </h2>
        <p>Using the LeetCode Slash Command is straightforward:</p>
        <ol class="list-decimal space-y-4 pl-4 text-sm sm:pl-6 sm:text-base">
          <li>
            <strong>Coding LeetCode Problems in PearAI</strong>: You can now solve LeetCode problems directly in PearAI. Create a new file for your solution and start coding as you would in a real interview setting.
          </li>
          <li>
            <strong>PearAI LeetCode Command</strong>:
            Type into the PearAI chatbox:
            <br /><br />
            <code class="rounded bg-gray-200 px-1 dark:bg-gray-700">/leetcode [LINK_TO_LEETCODE_PROBLEM] @[YOUR_SOLUTION_FILE]</code>
            <br /><br />
            This command kicks off your practice / learning process!
          </li>

          <li>
            <strong>Get Helpful Guidance</strong>: As you work on the problem, PearAI provides suggestions and hints, similar to what you might experience in an actual interview setting. This helps you improve your problem-solving skills and learn best practices.
          </li>
        </ol>
      </section>

      <section class="space-y-6">
        <h2 class="text-xl font-bold text-primary-600 dark:text-primary-400 sm:text-2xl">
          Features to Support Your Preparation
        </h2>
        <p>The LeetCode Slash Command includes several useful features:</p>
        <ul class="list-disc space-y-2 pl-4 text-sm sm:pl-6 sm:text-base">
          <li><strong>Problem Analysis</strong>: Get insights into potential approaches that you may not have considered.</li>
          <li><strong>Hint System</strong>: Receive gradual hints if you're stuck, encouraging independent problem-solving.</li>
          <li><strong>Code Review</strong>: Get feedback on your solution's efficiency and style.</li>
          <li><strong>Interview-Focused Approach</strong>: By emphasizing the thought process, it prepares you to articulate your strategies during actual interviews.</li>
        </ul>
        <p>
          This approach not only helps you prepare for interviews but also enhances your overall coding proficiency and problem-solving skills, making you a more adaptable and confident developer in your day-to-day work.
        </p>
      </section>


      <section class="space-y-6">
        <h2 class="text-xl font-bold text-primary-600 dark:text-primary-400 sm:text-2xl">
          A Useful Addition to Your Prep Toolkit
        </h2>
        <p>
          The LeetCode Slash Command is a practical feature aimed at making your interview preparation more convenient and effective. It's not a magic solution, but rather a helpful tool in your overall preparation strategy.
        </p>
        <p>
          We hope this new feature proves useful in your coding practice and interview preparation. Remember, consistent practice and a solid understanding of fundamental concepts are key to interview success.
        </p>
        <p>
          Start incorporating the LeetCode Slash Command into your preparation routine, and let us know how it works for you. We're always open to feedback and suggestions for improvement.
        </p>
      </section>
    </article>`,
  },
];
