# STANDBY SAPPORO デプロイガイド

このプロジェクトは、**GitHub Pages** と **Manusドメイン** の両方で公開できるように設計されています。

## 1. Manusドメインで公開する場合（推奨・一番簡単）

Manusの管理画面から「Publish」ボタンを押すだけで公開できます。
ドメインは `https://standby-sapporo.manus.space` のようになります。

## 2. GitHub Pagesで公開する場合

ご自身のGitHubアカウントで公開したい場合は、以下の手順で行ってください。

### 手順

1. GitHubに新しいリポジトリを作成します（例: `standby-sapporo`）。
2. このプロジェクトのファイルをすべてそのリポジトリにプッシュします。
3. リポジトリの「Settings」->「Pages」を開きます。
4. 「Source」で「GitHub Actions」を選択します。
5. 自動的に `.github/workflows/deploy.yml` が認識され、デプロイが始まります。

### 注意点

GitHub Pagesは通常 `https://username.github.io/repo-name/` というURLになります。
このため、画像やリンクのパスがずれる可能性があります。
もし表示が崩れる場合は、`vite.config.ts` の `base` 設定をリポジトリ名に合わせて変更してください。

例:
```typescript
export default defineConfig({
  base: '/standby-sapporo/', // リポジトリ名に合わせる
  // ...
})
```

## 3. カスタムドメインを使う場合

独自ドメイン（例: `standby-sapporo.com`）を使いたい場合は、Manusの「Settings」->「Domains」から設定するか、GitHub Pagesのカスタムドメイン設定を利用してください。
