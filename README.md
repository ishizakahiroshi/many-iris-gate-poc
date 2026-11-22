# many-iris-gate-poc

Many Iris の「develop は自動で取り込み、main・公開は人が通す」形を、GitHub の個人リポジトリで確かめるための試しのリポジトリです（[many-iris#46](https://github.com/ishizakahiroshi/many-iris/issues/46)）。中身はすべて合成の例で、製品のコードはありません。

## 確かめる形

- `main` を更新できるのは管理者だけです（ruleset の bypass に管理者の役割）。
- `develop` は PR からだけ取り込めます。承認は 0 件で、検査 `test` と `policy-guard` が通れば自動で取り込めます。
- `policy-guard` は、PR が `.github/`・`CODEOWNERS`・依存の定義や lockfile・秘密の検査の設定に触れていたら失敗します。その PR は人が見てから取り込みます。PR のコードは checkout せず、変更されたファイルの一覧だけを API で読みます。
- `v*` のタグを作る・動かす・消すのは管理者だけです。

## 中身

- `src/sum.js` と `test/sum.test.js`: `node --test` で回す小さな例
- `.github/workflows/test.yml`: PR と develop への push で試験を回す
- `.github/workflows/policy-guard.yml`: 守る場所に触れた PR を止める

## 試験

```sh
node --test
```
