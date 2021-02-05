---
path: "scala-for-beginners"
date: "2021-02-03"
title: "scala for beginners"
description: "scala初心者向けの前知識"
status: "draft"
tags: ["scala"]
---

# Scala-for-beginners

## About

## Java系の知識

### openJDKについて

### どのバージョンを使うか
JetBrainの調査をみると9か11を使うパターンがメジャー

### ライブラリ(.jar)の配布


## ツールについて

### sbtについて


### coursierについて

`setup`コマンド一発で
- java
- scala
- scalaのcliツール
をセットアップできる.

また、モダンなscalaのユーティリティ`ammonite`,ビルドツール`sbt`,フォーマッタ`scalafmt`などをインストールできる.

### エディタ
- jetbrainのIDEが一番使いやすい. VS Codeの場合は`metals`という拡張機能を使うと補完、ジャンプ、文法エラー等を指摘してくれる.

### フォーマッタ
- scalaformat: `scalafmt.conf`ファイルに設定した内容通りに自動でフォーマットしてくれる`sbt`プラグイン

### db
- flyway: dbマイグレーションツール

## ディレクトリ構成について

Java系言語は`CoC(設計よりも規約)`のルールに則っている事が多い. Scalaも同様で決められたディレクトリ構成を作ればいくらかの設定が省略できる.

sbtのテンプレートを使えばディレクトリ構成を覚える必要はない.

## バージョンについて
2系の `2.11.*`,`2.12.*`,`2.13.*`と3系がある. 3系はだいぶ違うシンタックスになっているので注意.

2系のバージョン表記は2.`major-version`.`minor-version`になっている. メジャーバージョン間ではソース互換(文法上エラーにならない)があっても、バイナリ互換がないのでビルド時にクロスビルドしなければならない. ちなみにこれは`sbt`を使えば楽にできる.


## 設定について

sbtプロジェクトの`src/main/resources`ディレクトリに`application.conf,application.json, application.properties, reference.conf`という名のファイルを置いておくとこの順に自動で読み込まれる.

## 文法について

### implicit

使い道は暗黙の型変換、グローバルな引数の取り回し(`Context`や`Config`など)、型クラスです.



