# vup 歌单站

[猫音ねね的歌单](https://nekone.work)

### 安装Node.js
[Node.js](https://nodejs.org/en/download)
使用nvm安装最新版的LTS。目前的依赖需要最低v20.9.0

### 更新歌单列表
编辑scripts/music.xlsx
然后在终端里运行
```bash
node scripts/converter.js
```
生成的文件在public/music_list.json。替换网站目录下的同名文件即可。

### 本地调试
终端运行：
```bash
npm install
npm run dev
```

### 导出/部署静态网站
终端运行：
```bash
npm build
```
生成网站在out/文件夹下。把这个文件夹内的所有文件放到网站根目录下即可。

## 修改相关

修改自项目:

[song-list-of-nanakaie](https://github.com/alan314m/song-list-of-nanakaie)


[vup-song-list](https://github.com/Akegarasu/vup-song-list)

感谢以上项目的开源贡献。
修改了若干处使项目更低门槛可以部署、编辑、发布。

本项目遵守 MIT License
