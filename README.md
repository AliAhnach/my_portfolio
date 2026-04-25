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
