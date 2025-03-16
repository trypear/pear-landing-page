# Japanese Landing Page Implementation Plan

## Overview

We will implement internationalization (i18n) support for the landing page to support Japanese language, with the ability to easily add more languages in the future.

## Why i18n Instead of Separate Pages

- More maintainable long-term
- Easier to add additional languages
- Follows web internationalization best practices
- Keeps codebase DRY (Don't Repeat Yourself)
- Better SEO handling with language metadata

## Implementation Steps

### 1. Setup Next.js i18n Infrastructure

- Add i18n configuration to next.config.js
- Set up language detection and routing
- Configure default and supported languages

### 2. Create Translation System

- Set up translation files structure
- Implement translation loading mechanism
- Add type safety for translations

### 3. Content Translation

Key sections requiring translation:

#### Hero Section

- "BACKED BY Y COMBINATOR"
- "PearAI: The AI Code Editor For Your Next Project"
- Main description text
- "Download For Free" button

#### Features Section

All feature cards including:

- "Code automatically with PearAI Agent"
- "Make specific in-line changes and ask questions with PearAI Chat"
- "No more tedious changes with PearAI Chat"
- "Research anything with PearAI Search"
  And their descriptions

#### Other Components

- OpenSource component text
- Showcase component content
- Navigation menu items
- Footer content

### 4. Component Modifications

- Update components to use translation hooks
- Ensure proper text direction handling
- Maintain responsive design with Japanese text

### 5. Language Switching

- Add language selector component
- Implement language switching logic
- Persist language preference

### 6. Testing & Validation

- Test with native Japanese speakers
- Verify proper text rendering
- Check responsive design with Japanese text
- Validate SEO metadata

## Technical Considerations

- Use appropriate font families for Japanese text
- Ensure proper character encoding
- Handle text length variations between languages
- Consider loading performance with additional language assets

## Next Steps

After approval of this plan, we should:

1. Switch to Code mode to implement the i18n infrastructure
2. Work with a Japanese translator to ensure accurate translations
3. Implement the changes iteratively, testing each component
