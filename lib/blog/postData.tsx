export const posts = [
  {
    title: "How We Designed Our Servers at PearAI",
    author: "Nathan Nang",
    date: "2024-09-01T00:00:00.000Z",
    excerpt:
      "I spent the last 2 months working on PearAI, an Open-Sourced AI-Powered Code Editor. It is like having an expert on your codebase right next to you. We achieve this with Retrieval Augmented Generation. This is my new startup after finishing my B.S. & M.S from Carnegie Mellon and working for 1.5 years in High Frequency Trading as a Software Engineer. This is exactly how we designed our server.",
    thumbnail: "/images/og-image.png",
    tags: ["server", "server design", "pearai server"],
    url: "/blog/how-we-designed-our-servers-end-to-end-for-pearai",
    content: `
        <div class="space-y-8 text-gray-800 dark:text-gray-200">
          <p class="text-xl leading-relaxed font-light">I spent the last 2 months working on PearAI, an Open-Sourced AI-Powered Code Editor. It's like having an expert on your codebase right next to you. We achieve this with Retrieval Augmented Generation. This is my new startup after finishing my B.S. & M.S from Carnegie Mellon and working for 1.5 years in High Frequency Trading as a Software Engineer. Here's exactly how we designed our server.</p>
  
          <figure class="my-12">
            <img src="/images/blog/pear-hanging-from-branch.png" alt="Pear hanging from branch" class="rounded-xl shadow-lg w-full">
            <figcaption class="text-center text-sm text-gray-600 dark:text-gray-400 mt-4 italic">PearAI: An AI-Powered Code Editor</figcaption>
          </figure>
  
          <p class="text-lg">We are launching our product next week, and we needed to build out our server this last month. As we're building fully in public, here's exactly how we did it. Hopefully, this helps you design a server with scalability, resilience, and security in mind.</p>
  
          <figure class="my-12">
            <img src="/images/blog/pearai-server-option.png" alt="PearAI Server Options" class="rounded-xl shadow-lg w-full">
            <figcaption class="text-center text-sm text-gray-600 dark:text-gray-400 mt-4 italic">PearAI Server Architecture Options</figcaption>
          </figure>
  
          <h2 class="text-3xl font-bold mt-12 mb-6 text-primary-600 dark:text-primary-400">What's this server for?</h2>
  
          <p class="text-lg mb-4">PearAI offers two different services for LLM:</p>
  
          <ol class="list-decimal list-inside space-y-4 ml-6 text-lg">
            <li class="pl-2"><span class="font-semibold">Use PearAI's hosted server:</span> Pay subscription for unlimited usage. Underlying LLM is abstracted for convenience and latest AI technology.</li>
            <li class="pl-2"><span class="font-semibold">Use API key:</span> Users self-manage and pay per token to the LLM Provider. On PearAI's side, this is Open-sourced and fully transparent. Users can also use their own local LLM.</li>
          </ol>
  
          <h2 class="text-3xl font-bold mt-12 mb-6 text-primary-600 dark:text-primary-400">Our Server Functionalities</h2>
  
          <ol class="list-decimal list-inside ml-6 text-lg grid grid-cols-2 gap-4">
            <li class="pl-2">Authentication</li>
            <li class="pl-2">Database</li>
            <li class="pl-2">Proxying</li>
            <li class="pl-2">Observability</li>
            <li class="pl-2">Payment</li>
            <li class="pl-2">Deployment</li>
          </ol>
  
          <h2 class="text-3xl font-bold mt-12 mb-6 text-primary-600 dark:text-primary-400">0. Never Start From Scratch</h2>
  
          <p class="text-lg">I'm a big fan of creating my own templates and never starting from scratch again. I open-source all of these, and you can find the Flask API Template I made/used for this project here: <a href="https://github.com/nathan-149/flask-backend-api-template" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">Flask Backend API Template</a></p>
  
          <div class="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-200 p-6 my-8 rounded-r-lg">
            <p class="font-bold text-lg mb-2">Edit:</p>
            <p class="text-base">DON'T USE FLASK, USE FASTAPI FOR ASYNC CAPABILITIES</p>
          </div>
  
          <h2 class="text-3xl font-bold mt-12 mb-6 text-primary-600 dark:text-primary-400">1. Authentication</h2>
  
          <p class="text-lg mb-6">We needed sign-up and sign-in functionality, as well as JWT tokens for each user. For this, we used Supabase, which handles authentication of users. This is how we are doing this:</p>
  
          <figure class="my-12">
            <img src="/images/blog/pearai-authentication-flow.png" alt="PearAI Authentication Flow" class="rounded-xl shadow-lg w-full">
            <figcaption class="text-center text-sm text-gray-600 dark:text-gray-400 mt-4 italic">PearAI Authentication Flow</figcaption>
          </figure>
  
          <div class="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-200 p-6 my-8 rounded-r-lg">
            <p class="font-bold text-lg mb-2">Edit:</p>
            <p class="text-base">DON'T USE SUPABASE, USE AUTH0</p>
          </div>
  
          <!-- Continue with the rest of the sections (2. Database, 3. Proxying, etc.) in a similar fashion -->
  
          <h2 class="text-3xl font-bold mt-12 mb-6 text-primary-600 dark:text-primary-400">Summary</h2>
  
          <p class="text-lg mb-4">In summary, this is the stack that we used and I would recommend:</p>
  
          <ul class="list-disc list-inside space-y-2 ml-6 text-lg bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <li class="pl-2">Primary language: <span class="font-semibold">Python</span></li>
            <li class="pl-2">API Framework: <span class="font-semibold">Flask</span></li>
            <li class="pl-2">Authentication: <span class="font-semibold">Supabase</span></li>
            <li class="pl-2">Payment: <span class="font-semibold">Stripe</span></li>
            <li class="pl-2">Database: <span class="font-semibold">Redis + Supabase (pSQL)</span></li>
            <li class="pl-2">Observability: <span class="font-semibold">OpenTelemetry + Axiom</span></li>
            <li class="pl-2">Deployment: <span class="font-semibold">DigitalOcean</span></li>
          </ul>
  
          <p class="text-lg mt-8">Hopefully this was helpful to someone. PearAI is open-sourced, so please help us out by starring the repo here: <a href="https://github.com/trypear/pearai-app" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">PearAI GitHub Repo</a>, and consider contributing! If you'd like to use the app, join the wait list here <a href="https://trypear.ai/" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">https://trypear.ai/</a>. We're launching next week to our first batch of users!</p>
  
          <p class="text-lg mt-6">Also, feel free to check out my YouTube series on this, as I am documenting the entire startup journey with my cofounder <a href="https://youtube.com/@FryingPan" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">FryingPan</a>. <a href="https://youtube.com/nang88" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">https://youtube.com/nang88</a>. Thanks!</p>
        </div>
      `,
  },
  {
    title: "Setting Up Auto-Complete On PearAI",
    date: "2024-08-31T00:00:00.000Z",
    excerpt:
      "PearAI supports tab autocomplete, and this is how to set this up. Tab autocomplete predicts / suggests what you would type next as you're coding!",
    thumbnail: "/images/og-image.png",
    tags: ["autocomplete", "suggestions"],
    url: "/blog/setting-up-auto-complete-on-pearai",
    author: "Nathan Nang",
    content: `
          <div class="space-y-8 text-gray-800 dark:text-gray-200">
            <p class="text-xl leading-relaxed font-light">PearAI supports tab autocomplete, and this is how to set this up. Tab autocomplete predicts/suggests what you would type next as you're coding!</p>
    
            <p class="text-lg">This is the guide to do that:</p>
    
            <ol class="list-decimal list-inside space-y-8 ml-6 text-lg">
              <li class="pl-2">
                <h3 class="inline-block text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">Setup Codestral</h3>
                <p class="mt-2">We recommend using Codestral, the leading model for code completion (or FIM — Fill In Middle). It's also open-sourced! You'll need to obtain a Codestral API key from <a href="https://console.mistral.ai/" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">Mistral API</a>.</p>
              </li>
    
              <li class="pl-2">
                <h3 class="inline-block text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">Add to PearAI config.json</h3>
                <p class="mt-2 mb-4">Fill in <code class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">YOUR_API_KEY</code> with your API key:</p>
    
                <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto">
                  <pre class="text-sm"><code class="language-json">{
    "tabAutocompleteModel": {
    "title": "Codestral",
    "provider": "mistral",
    "model": "codestral-latest",
    "apiKey": "YOUR_API_KEY"
    }
}</code>
                </pre>
                </div>
    
                <figure class="my-8">
                  <img src="/images/blog/open-pearai-config.png" alt="Command Palette in PearAI (Cmd/Ctrl+Shift+P)" class="rounded-xl shadow-lg w-full">
                  <figcaption class="text-center text-sm text-gray-600 dark:text-gray-400 mt-4 italic">Command Palette in PearAI (Cmd/Ctrl+Shift+P)</figcaption>
                </figure>
              </li>
    
              <li class="pl-2">
                <h3 class="inline-block text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">Enjoy the development speed up with autocomplete!</h3>
                <p class="mt-2">Once you've set up the autocomplete, you'll notice a significant boost in your coding speed and efficiency. The AI-powered suggestions will help you write code faster and with fewer errors.</p>
              </li>
            </ol>
    
            <div class="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 text-blue-800 dark:text-blue-200 p-6 my-8 rounded-r-lg">
              <p class="font-bold text-lg mb-2">Pro Tip:</p>
              <p class="text-base">You can customize the autocomplete behavior in PearAI's settings. Experiment with different options to find the setup that works best for your coding style!</p>
            </div>
    
            <p class="text-lg mt-8">Setting up autocomplete in PearAI is a game-changer for your development workflow. It combines the power of AI with your coding expertise, resulting in faster and more efficient coding sessions. Give it a try and experience the difference for yourself!</p>
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
    thumbnail: "/images/og-image.png",
    tags: ["AI", "Claude 3.5", "PearAI", "Code Editor"],
    content: `
          <article class="space-y-6 text-gray-800 dark:text-gray-200">
            <p class="text-xl font-semibold leading-relaxed">
              At PearAI, we're constantly striving to improve our open-source AI code editor. Our latest advancement involves integrating Anthropic's Claude 3.5 model to enhance code syntax and logic understanding when providing AI context to a user's codebase. This integration presented unique challenges and opportunities that we're excited to share with you.
            </p>
            
            <section>
              <h2 class="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">Why Claude 3.5?</h2>
              <p class="mb-3">
                Claude 3.5 offers significant improvements in natural language understanding and code comprehension. By leveraging this model, we aimed to:
              </p>
              <ul class="list-disc pl-6 space-y-2">
                <li>Enhance the accuracy of code suggestions and completions</li>
                <li>Improve the AI's understanding of complex code structures and logic</li>
                <li>Provide more context-aware responses to user queries about their codebase</li>
              </ul>
            </section>
    
            <section>
              <h2 class="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">The Implementation Challenge</h2>
              <p class="mb-3">
                One of the main hurdles we faced was adapting our existing infrastructure to work with Claude 3.5. Unlike other LLMs we've used, such as OpenAI's models, Claude 3.5 required a different approach to prompt handling:
              </p>
              <ul class="list-disc pl-6 space-y-2">
                <li>Our existing setup handled server prompts from the client-side</li>
                <li>Claude 3.5 needed server-side prompt handling for optimal performance and security</li>
                <li>This discrepancy required us to rethink our architecture for Anthropic integration specifically</li>
              </ul>
            </section>
    
            <section>
              <h2 class="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">Our Solution</h2>
              <p class="mb-3">
                To address this challenge, we implemented a hybrid approach:
              </p>
              <ol class="list-decimal pl-6 space-y-2">
                <li>We maintained our client-side handling for existing LLMs to ensure backwards compatibility</li>
                <li>For Claude 3.5, we developed a new server-side handler specifically for Anthropic API calls</li>
                <li>We created a routing mechanism to direct requests to the appropriate handler based on the selected AI model</li>
              </ol>
              <p class="mt-3">
                This solution allowed us to leverage Claude 3.5's capabilities while maintaining support for our other AI models.
              </p>
            </section>
    
            <section>
              <h2 class="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">Benefits of the Integration</h2>
              <p class="mb-3">
                The integration of Claude 3.5 has brought several improvements to PearAI:
              </p>
              <ul class="list-disc pl-6 space-y-2">
                <li>More accurate and context-aware code suggestions</li>
                <li>Improved understanding of complex codebases, leading to better responses to user queries</li>
                <li>Enhanced ability to explain code logic and suggest optimizations</li>
                <li>Faster processing of large codebases due to Claude 3.5's efficient architecture</li>
              </ul>
            </section>
    
            <blockquote class="border-l-4 border-primary-500 pl-4 italic text-gray-700 dark:text-gray-300">
              "The integration of Claude 3.5 has significantly elevated PearAI's capabilities, allowing us to provide an even more powerful and intuitive coding experience for our users." - Nathan Nang, PearAI Founder
            </blockquote>
    
            <section>
              <h3 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-3">Looking Ahead</h3>
              <p class="mb-3">
                With Claude 3.5 successfully integrated, we're now focusing on:
              </p>
              <ul class="list-disc pl-6 space-y-2">
                <li>Further optimizing the interaction between our editor and the Claude 3.5 model</li>
                <li>Developing new features that leverage Claude 3.5's advanced language understanding</li>
                <li>Exploring ways to combine Claude 3.5 with other AI models for even better results</li>
              </ul>
            </section>
    
            <p class="text-lg font-semibold mt-6">
              We're excited about the possibilities that Claude 3.5 brings to PearAI and look forward to continuing our journey of making AI-assisted coding more powerful and accessible. Stay tuned for more updates and features as we push the boundaries of what's possible in AI-powered code editing!
            </p>
          </article>
        `,
  },
];
