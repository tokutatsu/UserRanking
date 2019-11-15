# UserRanking

## 使用方法

### sequelize-cliのインストール
`sequelize`コマンドを使用するため、sequelize-cliをインストールしていない場合は、グローバルでインストールしてください。

```
$ npm install -g sequelize-cli
```

### パッケージのインストール

```
$ npm install
```

### 開発環境
#### データベース
```
$ sequelize db:migrate --env development
```
#### 起動
```
$ node app.js
```

### 本番環境

#### データベース
```
$ sequelize db:migrate --env development
```
#### 起動
##### Windows
```
$ $env:NODE_ENV="production"
$ node app.js
```

##### Linux
```
$ NODE_ENV=production node myapp/app.js
```