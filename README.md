# LogiCon Competition Website

Static GitHub Pages website for the LogiCon Competition proposal.

## Recommended final repository name

For the clean organization-level GitHub Pages URL, rename this repository to:

```text
LogiCon-Competition.github.io
```

Then make the repository public and publish GitHub Pages from the `main` branch root.

The final site URL should be:

```text
https://logicon-competition.github.io/
```

## Publish on GitHub Pages

1. Go to repository **Settings → General** and rename the repository to `LogiCon-Competition.github.io`.
2. Go to **Settings → General → Danger Zone** and make the repository public if needed.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`.
6. Save.

The first deployment can take several minutes.

## What to customize before sharing with reviewers

Edit `index.html` and replace:

- Organizer names, affiliations, and links.
- Contact email or Google Group.
- Exact competition task description.
- Exact tracks and allowed resources.
- Final submission platform link.
- Starter kit repository link.
- Dataset/license links.
- Any final prize or recognition information.

The site intentionally says “proposed NeurIPS 2026 competition” and does **not** claim official NeurIPS acceptance.

## Suggested next repositories

After the website is live, create:

```text
LogiCon-Competition/starter-kit
LogiCon-Competition/baselines
LogiCon-Competition/data-card
```

Keep the website as the canonical public hub and link outward to Codabench/Kaggle/EvalAI, datasets, starter code, discussion forums, and reports.
