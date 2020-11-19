# copyword
## 1、copyword是什么
copyword是一款可以将文本复制粘贴到粘贴板上的小插件，它不依赖任何第三方库，大小仅有1kb。
## 2、使用方法
copyword的使用方法非常简单
```shell
npm install copyword --save-dev
```
```js
import copyword from 'copyword'
```
或
```js
<script src="dist/copywordJS.min.js"></script>
```
```js
const flag = copyword('我是要被复制的内容')

if (flag) {
  alert('复制成功')
} else {
  alert('复制失败')
}
```
## 3、浏览器支持

| <img src="https://clipboardjs.com/assets/images/chrome.png" width="48px" height="48px" alt="Chrome logo"> | <img src="https://clipboardjs.com/assets/images/edge.png" width="48px" height="48px" alt="Edge logo"> | <img src="https://clipboardjs.com/assets/images/firefox.png" width="48px" height="48px" alt="Firefox logo"> | <img src="https://clipboardjs.com/assets/images/ie.png" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="https://clipboardjs.com/assets/images/opera.png" width="48px" height="48px" alt="Opera logo"> | <img src="https://clipboardjs.com/assets/images/safari.png" width="48px" height="48px" alt="Safari logo"> |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 42+ ✔ | 12+ ✔ | 41+ ✔ | 9+ ✔ | 29+ ✔ | 10+ ✔ |

