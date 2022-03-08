# use-easy-store

[//]: # '[![NPM version](https://img.shields.io/npm/v/@scumon/unit-conversion.svg?style=flat)](https://npmjs.org/package/@scumon/unit-conversion) [![NPM downloads](http://img.shields.io/npm/dm/@scumon/unit-conversion.svg?style=flat)](https://npmjs.org/package/@scumon/unit-conversion)'

一个有手就行的 react-hooks 状态管理库

## 下载

```bash
yarn add use-easy-store -S
```

## 使用

### app.js

```tsx
import { createEasyStore } from 'use-easy-store';

createEasyStore({
  numA: 0,
  numB: 0,
});

const App = (props) => {
  return props.children;
};

export default App;
```

### A 组件内

```tsx
import { useEasyStore, store } from 'use-easy-store';

const A = (props) => {
  const numA = useEasyStore((data) => data.numA);
  handleClick = () => {
    store.setImmerEasyState((data) => {
      data.numA = numA + 1;
    });
  };
  return (
    <div>
      {numA}
      <button onClick={handleClick}>更新numA</button>
    </div>
  );
};

export default A;
```
