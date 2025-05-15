---
title: "How To Setup PearAI Database (Beta)"
description: "A step-by-step guide to setting up your database for PearAI projects"
date: "2025-05-10"
image: "/images/blog/pearai-database-setup.png"
author: "PearAI Team"
---

# How To Setup PearAI Database (Beta)

Welcome! You are likely using PearAI Creator to make a project, and are connecting the backend. To store data, all you need is to add your database URL and PearAI Database will take care of the rest! Currently, the process is a bit manual due to the nature of the Beta - we are working on making this process more seamless in the near future.

PearAI recommends you use Neon for this, so here's how to get your database URL:

## Step 1: Create a Neon Account

Create an account with Neon, a popular database provider by visiting [https://console.neon.tech](https://console.neon.tech/).

![Create Neon Account](/images/blog/neon-signup.png)

## Step 2: Create a New Project

Create a new project using the free tier option.

![Create New Project](/images/blog/neon-create-project.png)

## Step 3: Get Your Connection String

Click "Connect" to view your database connection details and copy the connection string provided by Neon.

![Copy Connection String](/images/blog/neon-connect.png)

## Step 4: Configure Your Project

Paste the connection string as the "DATABASE_URL" variable in your .env file. If you don't have an .env file yet, create one and copy the contents of .env.example into it. Make sure to save the file.

![Configure ENV](/images/blog/pearai-env-config.png)

## Step 5: All Done!

PearAI Creator will now use this database for your project!

**Note:** You may need to reset this database or create new ones if you intend to make new projects.
