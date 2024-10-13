---
title: "How We Designed Our Servers at PearAI"
date: 2024-09-01
excerpt: I spent the last 2 months working on PearAI, an Open-Sourced AI-Powered Code Editor. It is like having an expert on your codebase right next to you. We achieve this with Retrieval Augmented Generation. This is my new startup after finishing my B.S. & M.S from Carnegie Mellon and working for 1.5 years in High Frequency Trading as a Software Engineer. This is exactly how we designed our server.
thumbnail: "/images/og-image.png"
tags: ["server", "server design", "pearai server"]
---

I spent the last 2 months working on PearAI, an Open-Sourced AI-Powered Code Editor. It is like having an expert on your codebase right next to you. We achieve this with Retrieval Augmented Generation. This is my new startup after finishing my B.S. & M.S from Carnegie Mellon and working for 1.5 years in High Frequency Trading as a Software Engineer. This is exactly how we designed our server.

![Pear hanging from branch](/images/blog/pear-hanging-from-branch.png)

We are launching our product next week, and we needed to build out our server this last month. As we’re building fully in public, here’s exactly how we did it. Hopefully this helps you for designing a server with scalability, resilience, and security in mind.

![Pear hanging from branch](/images/blog/pearai-server-option.png)

What’s this server for?

PearAI offers two different services for LLM:

1. Use PearAI’s hosted server. Pay subscription for unlimited usage. Underlying LLM is abstracted for convenience and latest AI technology.

2. Use API key. Users self-manage and pay per token to the LLM Provider. On PearAI’s side, this is Open-sourced and fully transparent. Users can also use their own local LLM

Our server needs the following functionalities:

1. Authentication
2. Database
3. Proxying
4. Observability
5. Payment
6. Deployment

## 0. Never Start From Scratch

I’m a big fan of creating my own templates and never starting from scratch again. I open-source all of these, and you can find the Flask API Template I made/used for this project here: [https://github.com/nathan-149/flask-backend-api-template](https://github.com/nathan-149/flask-backend-api-template)

Edit: DONT USE FLASK, USE FASTAPI FOR ASYNC CAPABILITIES

## 1. Authentication

We needed sign-up and sign-in functionality, as well as JWT tokens for each user. For this, we used Supabase, which handles authentication of users. This is how we are doing this:

![Pear hanging from branch](/images/blog/pearai-authentication-flow.png)

EDIT: DONT USE SUPABASE USE AUTH0

## 2. Database

For our database, we had to come up with a schema for a pSQL database, including any essential data needed. This part was somewhat iterative when we were making the server, and we made changes along the way.

We used Supabase for this. I highly recommend — the API is clean with verbose docs, you can view and edit the databases in the web UI. For faster access to non-permanent memory (see Proxying), we used a Redis cache.

## 3. Proxying

Foundational Model API’s don’t offer a new API for each user, or have per-user quotas or rate limiting. So, we have to implement this middle layer per user. We coded up the logic of making sure the user is authenticated via the JWT, kept track of user’s requests so far, subscription status, etc. We drop all requests that are not authenticated for security and reduced load.

For things like checking / updating user’s requests so far, we use a Redis cache (which is in-memory) for lower latency, and then have a nightly cronjob to write to persistent storage on Supabase.

Another thing we wanted to implement is RabbitMQ pub/sub logic for processing requests. This will allow for more resilience to spikes in high load. This is not needed at this stage though!

## 4. Observability

We needed observability and metrics on how users were using the product and why things crashed through logs. We chose OpenTelemetry/Axiom for this. This gets us dashboards for logs and usage for cheap. We just pass our logs to OpenTelemetry and use Axiom to connect to OpenTelemetry to get logs and traces in a dashboard:

![Pear hanging from branch](/images/blog/axiom-dashboard.png)

## 5. Payment

We needed to handle payment from users. For my last project of AI-Generated E-Books, I used Stripe, and it was OP. We used it again for this server, and it was OP again. They also handle all the payment info of customers, which is extremely convenient. Your payment flow can just redirect to Stripe’s service and payment is taken care of!

## 6. Deployment

I’ve only used AWS for cloud deployment. It was alright, a bit expensive. This time, we opted to use DigitalOcean after one of our contributors recommended it. DigitalOcean’s App Platform is OP and literally perfect for our server API use case. I could not recommend it more over AWS, Azure, or Google cloud. We were going to add things like Cloudflare for security, but DigitalOcean App Platform already comes with this. DigitalOcean also lets us host our Redis cache on their platform for pretty cheap (around the same as Redis’ hosting services) which is convenient.

## Summary

In summary, this is the stack that we used and I would recommend:

- Primary language: Python
- API Framework: Flask
- Authentication: Supabase
- Payment: Stripe
- Database: Redis + Supabase (pSQL)
- Observability: OpenTelemetry + Axiom
- Deployment: DigitalOcean

Hopefully this was helpful to someone. PearAI is open-sourced, so please help us out by starring the repo here: [https://github.com/trypear/pearai-master](https://github.com/trypear/pearai-master), and consider contributing! If you’d like to use the app, join the wait list here [https://trypear.ai/](https://trypear.ai/). We’re launching next week to our first batch of users!

Also, feel free to check out my youtube series on this, as I am documenting the entire startup journey with my cofounder [FryingPan](https://youtube.com/@FryingPan). [https://youtube.com/nang88](https://youtube.com/nang88). Thanks!
