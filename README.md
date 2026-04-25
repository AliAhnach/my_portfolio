# Ali Ahnach Portfolio

Ce depot est maintenant organise pour un deploiement simple sur GitHub Pages.

## Structure

- `apps/web` : application portfolio Vite/React a deployer
- `apps/api-server` : serveur API local
- `apps/mockup-sandbox` : bac a sable UI
- `lib/*` : bibliotheques partagees

## Commandes utiles

```bash
pnpm install
pnpm dev
pnpm build:web
pnpm preview:web
```

## Deploiement GitHub Pages

Le workflow [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) construit automatiquement `apps/web` et le publie sur GitHub Pages a chaque push sur `main`.

Dans GitHub :

1. Ouvrir `Settings > Pages`
2. Choisir `GitHub Actions` comme source de deploiement
3. Pousser le depot sur la branche `main`

Le chemin de base est configure automatiquement avec le nom du repository GitHub.

## Deploiement Vercel

Le fichier [`vercel.json`](./vercel.json) est configure pour un deploiement depuis la racine du monorepo :

```json
{
  "buildCommand": "pnpm build:web",
  "outputDirectory": "apps/web/dist"
}
```

Dans Vercel :

1. Importer le repository a partir de la racine du projet
2. Laisser `Root Directory` vide, ou le regler sur la racine du monorepo
3. Verifier que le build utilise bien `pnpm build:web`
4. Verifier que l'output directory est `apps/web/dist`
