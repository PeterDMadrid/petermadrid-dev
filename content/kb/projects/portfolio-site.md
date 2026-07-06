---

title: Personal Portfolio Site
category: project
-----------------

## Overview

Next.js 14 personal portfolio (petermadrid-dev) designed to showcase projects, skills, and professional experience. Includes a GitHub contribution graph component built using the GitHub GraphQL API.

## AI Portfolio Assistant

The portfolio includes an AI-powered assistant that acts as Peter Madrid's digital secretary.

Built using:

* Next.js 14
* Google Gemini API
* Gemini Embeddings
* Retrieval-Augmented Generation (RAG)
* Markdown-based knowledge base

Features:

* Answers questions about Peter's projects, skills, experience, and services
* Retrieves information from a curated knowledge base rather than relying on general knowledge
* Uses semantic search and cosine similarity to find relevant information
* Refuses to invent information when an answer is not available
* Can explain the technologies and architecture used to build the assistant itself

## Technical Highlights

* Server-side API routes using Next.js App Router
* Semantic search powered by vector embeddings
* Knowledge base indexing and retrieval pipeline
* Context-grounded AI responses
* Production deployment on AWS infrastructure

## Deployment

Hosted on AWS EC2 running Ubuntu 24.04 LTS.

Infrastructure:

* Nginx reverse proxy
* PM2 process management
* SSL via sslip.io
* Automated Git-based deployment workflow
