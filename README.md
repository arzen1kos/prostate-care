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
>
> **Name:** `dev`
> 
> **Purpose:** Primary integration branch for active development. Features, fixes, and refactors are merged here before being promoted to production.
> 
> **Workflow**: `feature/* → dev → main`
> - Keep builds passing.
> - Merge tested work only.
> - Sync regularly with `main`.
>
> **Status:** Integrating RAG chatbot (In Progress)

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

# To automatically initialize and fetch all submodules, use this instead
git clone --recurse-submodules https://github.com/arzen1kos/prostate-care.git 

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

### Adding Submodules
```bash
git submodule add https://github.com/arzen1kos/prostate-care-assets.git public/assets

# manually update the submodules 
git submodule update --init --recursive
```

## Cleanup
```bash
# 1. Unregister from .git/config and clear the working directory
git submodule deinit -f public/assets

# 2. Remove the cached repo data (this is the one people forget)
rm -rf .git/modules/public/assets

# 3. Remove from the index and .gitmodules, then commit
git rm -f public/assets
```

----

