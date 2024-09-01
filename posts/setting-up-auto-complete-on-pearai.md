---
title: "Setting Up Auto-Complete On PearAI"
date: 2024-08-31
excerpt: PearAI supports tab autocomplete, and this is how to set this up. Tab autocomplete predicts / suggests what you would type next as you’re coding!
thumbnail: "/images/og-image.png"
tags: ["autocomplete", "suggestions"]
---

PearAI supports tab autocomplete, and this is how to set this up. Tab autocomplete predicts/suggests what you would type next as you’re coding!

This is the guide to do that:

1. Setup Codestral

   We recommend using Codestral, the leading model for code completion (or FIM — Fill In Middle). It’s also open-sourced! You’ll need to obtain a Codestral API key from [Mistral API](https://console.mistral.ai/).

2. Add to PearAI config.json (Fill in `YOUR_API_KEY` with your API key.):

   ```json
   "tabAutocompleteModel": {
      "title": "Codestral",
      "provider": "mistral",
      "model": "codestral-latest",
      "apiKey": "YOUR_API_KEY"
   }
   ```

   ![Command Palette in PearAI (Cmd/Ctrl+Shift+P)](/images/blog/open-pearai-config.png)

3. Enjoy the development speed up with autocomplete!
