# ディレクトリ構造
このドキュメントでは、`site/` プロジェクトのディレクトリ構造について説明します。以下は、主要なディレクトリとその役割の概要です。

```
site/
├─app/                         // Next.js App Router のエントリ
│  ├─layout.tsx                // 全ページ共通レイアウト
│  ├─page.tsx                  // トップページ（ランディング）
│  └─globals.css               // グローバルスタイル & Tailwind 設定
│
├─components/
│  └─landing/                  // トップページ専用セクション
│      ├─Header.tsx
│      ├─HeroSection.tsx
│      ├─AboutSection.tsx
│      ├─ActivitiesSection.tsx
│      ├─AchievementsSection.tsx
│      ├─JoinSection.tsx
│      └─Footer.tsx
│
├─public/
│  └─images/
│      ├─exp-logo.svg          // ロゴ
│      ├─kickoff.JPG           // ヒーローで使う写真
│      ├─Hero1/**              // Hero セクション スライダー用
│      ├─Hero2/**
│      ├─Hero3/**
│      ├─about/**              // About セクション用
│      └─activities/**         // Activities セクションの写真
│
├─docs/                        // このプロジェクトのドキュメント
│  ├─01-setup.md
│  ├─02-git.md
│  ├─03-authentication.md
│  ├─04-database.md
│  ├─05-environment.md
│  ├─06-directory.md
│  └─images/
│      └─login-flow.jpg        // 他プロジェクトから流用した図など
│
├─package.json
└─tsconfig.json など
```

# 特筆すべきディレクトリ

## app/

Next.js App Router のエントリポイントです。

- `page.tsx`: サイトトップ。`landing/` 配下のセクションコンポーネントを読み込んで構成しています。
- `layout.tsx`: ヘッダーやフッターなど、ページ全体に共通するレイアウトを定義します。
- `globals.css`: Tailwind CSS とカラーパレット（EXP. のブランドカラー）を定義しています。

## components/landing/

トップページ専用の UI コンポーネント群です。

- セクションごとにファイルが分かれており、責務が明確です。
- 将来、別ページでも再利用したくなったら、`components/common/` などに切り出す想定です。

## public/images/

Next.js の `public` ディレクトリで、ビルド時にそのまま静的ファイルとして配信されます。

- `images/` 以下は **用途ごとにサブフォルダ** を分けています。
- 画像パスは `/images/...` の形で `next/image` から参照します。

## docs/

開発者向けドキュメントを Markdown で管理する場所です。

- 環境構築、Git 運用、ディレクトリ構成などをここにまとめています。
- `tera/` プロジェクトと揃えた構成になっているため、今後の共通運用にも流用しやすくなっています。
