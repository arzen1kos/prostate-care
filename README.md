<div align="center">

    <img width="100" height="100" alt="prostate-care-logo" src="https://github.com/user-attachments/assets/e06084a5-4925-41f7-b8f3-5368417d4163" />

# Prometheus | Prostate Care

### Prostate Cancer Support Website Aotearoa

_Knowledge, support, and connection for the Aotearoa prostate cancer community._

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0A135F?style=for-the-badge&logo=tailwindcss&logoColor=06B6F8)
![RAG](https://img.shields.io/badge/RAG-7C3AED?style=for-the-badge)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PGVector-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Ollama](https://img.shields.io/badge/Ollama-white?logo=ollama&logoColor=black&style=for-the-badge)

`~⟢~`

[![Website](https://img.shields.io/badge/Live_Demo-View%20on%20Netlify-00007e?style=for-the-badge&logo=netlify)](prostatecarenz.netlify.app/)
</div>

## Branch Notes

**Name:** `feature/article-content`

**Purpose:** Establish a centralised content architecture for article-based content, including PDF ingestion, content transformation, metadata management, and Research Hub integration.

**Scope**
- Create Astro Content Collections for article content
- Convert PDF resources into structured Markdown/MDX content
- Standardise article metadata and taxonomy
- Generate vector-ready JSONL payloads for RAG ingestion
- Support filtering by year, topic, audience, disease stage, and document type
- Eliminate hardcoded article content from pages and components
- Prepare content for future pgvector and Ollama integration

**Workflow:** `feature/article-content → dev → main`

**Deliverables**

- `content/research/*`
- Research content collection schemas
- PDF ingestion scripts
- Metadata extraction pipeline
- RAG chunk generation pipeline
- Research Hub content source
- Taxonomy and filtering support

**Guidelines**
- Use Astro Content Collections as the source of truth
- Store website content as Markdown or MDX
- Generate RAG assets from content, not vice versa
- Keep content and presentation layers separate
- Preserve source PDF references and attribution

**Dependencies**
- Existing PDF library under `public/assets/pdf`
- Docker services (Ollama, nomic-embed-text, PostgreSQL, pgvector)

**Status:** In Progress - Building article ingestion, content collections, and Research Hub data architecture.

## Launching the app locally

### Requirements:

- **Operating System:**
  - (a) Windows 10 or Windows 11 environment  
    &nbsp;&nbsp;&nbsp;&nbsp;- WSL2 installed to launch Linux Ubuntu environment  
    &nbsp;&nbsp;&nbsp;&nbsp;- Ubuntu LTS 22.04 distro installed
  - (b) Linux Ubuntu (**preferred**)

- **Software:**
  - Visual Studio Code installed
  - Node.js and Git installed
  - Docker (to install Ollama and PostgreSQL containers)

### Main Steps

1. Cloning the repository:

```bash
git clone https://github.com/arzen1kos/prostate-care.git
cd prostate-care
```

2. Installing the package for dependencies

In the parent directory, run the following commands:

```bash
rm -rf node_modules
rm -rf package-lock.json
npm install
```

3. Launching the app

In the parent directory, run the following commands:

#### Module dependency resolution

```bash
npm run dev
```

----

Created by Arsenie — 2025
