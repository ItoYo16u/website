---
path: "scala-for-beginners"
date: "2021-02-03"
title: "scala for beginners"
description: "このページでは,Scalaの初心者の躓きがちな点を考慮しつつScalaの使い方について説明します."
status: "draft"
tags: ["scala"]
---

# Scala-for-beginners
## About
このページでは,Scalaの初心者の躓きがちな点を考慮しつつScalaの使い方について説明します.
## Java系の知識

### Mavenについて

#### Maven Centralからパッケージを配布する

ライブラリの配布/取得自体は適当な形式のディレクトリに`jar`ファイルや`pom`ファイルをおいて、適当なresolverを定義してやればMaven Central意外でも出来る. 

例えば、サーバー`https://example.com/my/repo/`にパッケージ`"example" %% "lib" % 0.0.1`を配置する場合次のような構成すればいい.

1. `https://example.com/my/repo/example/lib_<scalaVersion>/0.0.1/<jarname>.jar`を作る
2. `built.sbt`に`https://example.com/my/repo/`のresolverを追加する

パッケージをホストするのは自分のサーバーでもいいしgithub packagesを利用しても良い.

しかし、この方法だといずれにしてもパッケージごとにresolverを追加しないといけないのでMaven Centralに置くほうが楽.


### openJDKについて

### どのバージョンを使うか
JetBrainの調査をみると8,9か11を使うパターンがメジャー

[Scala プログラミング - インフォグラフィック：2020年開発者エコシステムの現状](https://www.jetbrains.com/ja-jp/lp/devecosystem-2020/scala/)

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
2系( `2.11.*`,`2.12.*`,`2.13.*`)と3系がある. `2.10.*`以前もあるがメジャーではない. [Scala プログラミング - インフォグラフィック：2020年開発者エコシステムの現状](https://www.jetbrains.com/ja-jp/lp/devecosystem-2020/scala/)によると2%程度しか使われていない. 
パッケージを利用する場合は自分の使っているバージョンに合わせて`"package" % "name_<scalaVersion>" % "x.x.x"`と書かないといけないが、`"package" %% "name" % "x.x.x"`と書くことでバージョン記述を省略できる.

3系は型クラスが`given`と`summon`で定義・呼び出しできたり、Pythonのように`{ }`をインデントで代用できたりしてだいぶ違うシンタックスになっているので注意. とはいえ、初学者からすると2系の複雑な`implicit`が無くなるのでわかりやすいかもしれない.

2系のバージョン表記は2.`major-version`.`minor-version`になっている. メジャーバージョン間ではソース互換(文法上エラーにならない)があっても、バイナリ互換がないのでビルド時にクロスビルドしなければならない. ちなみにこれは`sbt`の`crossScalaVersions`を使えば楽にできる.


## 設定について

sbtプロジェクトの`src/main/resources`ディレクトリに`application.conf,application.json, application.properties, reference.conf`という名のファイルを置いておくとこの順に自動で読み込まれる.

## 文法について

### implicit

使い道は暗黙の型変換と既存クラスの拡張、グローバルな引数の取り回し(`Context`や`Config`など)、型クラス.

やたらと複雑なので3系では暗黙の変化や既存クラスの拡張は`extension`、グローバルな引数の取り回しは`using`に型クラスは`given`と`summon`に、分けられている.


