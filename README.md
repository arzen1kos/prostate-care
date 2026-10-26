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

## UI Snapshots

<table>
  <tr align="center">
    <td width="300">
      <img width="485" height="360" title="Splashscreen" alt="splashscreen" src="https://github.com/user-attachments/assets/7973378e-9982-451d-8676-03c1ab08a62e" />
    </td>
    <td width="300">
      <img width="515" height="360" title="Homepage" alt="landing-page-after-delay" src="https://github.com/user-attachments/assets/68df6ee0-f5eb-4c58-8b6c-2cf907faa938" />
    </td>
    <td width="300">
      <img width="420" height="300" title="Family Support Page" alt="family-path" src="https://github.com/user-attachments/assets/2c76c513-c9d0-466c-a995-39995d7f7e32" />
    </td>
  </tr>
  <tr align="center">
    <td>
      <img width="485" height="360" title="Research Hub Page" alt="research-path" src="https://github.com/user-attachments/assets/1a3d7860-4999-48aa-9c2b-13791fa2df3a" />
    </td>
    <td>
      <img width="515" height="360" title="Patient Space Page" alt="patient-path" src="https://github.com/user-attachments/assets/33f985e9-afe6-4760-a183-bacf77bfe566" />
    </td>
    <td>
      <img width="420" height="300" title="ai" alt="ai-chatbot-response" src="https://github.com/user-attachments/assets/71452d4f-da41-4f62-a000-98370b22b319" />
    </td>
  </tr>
</table>

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

----

Created by Arsenie — 2025
