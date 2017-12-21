# @leizm/logger

[![Greenkeeper badge](https://badges.greenkeeper.io/leizongmin/leizm-logger.svg)](https://greenkeeper.io/)

简单日志记录器

## 安装

```bash
npm install @leizm/logger --save
```

## 使用方法

```typescript
import log from "@leizm/logger";

log.debug('hello, world: %s', process.version);
log.info('hello, world');
log.warn('hello, world');
log.error('hello, world');
log.fatal('hello, world'); // 输出信息并结束进程
```

## 授权协议

```text
MIT License

Copyright (c) 2017 老雷 <leizongmin@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
