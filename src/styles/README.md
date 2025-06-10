# Less 样式指南

本项目已配置支持 Less 语法。以下是使用说明：

## 文件结构

```
src/styles/
├── variables.less    # 全局变量定义
├── main.less        # 主要样式文件
└── README.md        # 本文件
```

## 使用方法

### 1. 在 Vue 组件中使用 Less

在 Vue 组件的 `<style>` 标签中添加 `lang="less"` 属性：

```vue
<style lang="less" scoped>
@import '../styles/variables.less';

.my-component {
  color: @primary-color;
  padding: @spacing-md;
  
  .nested-element {
    background-color: @light-color;
  }
}
</style>
```

### 2. 全局样式

在 `src/main.js` 中导入全局样式：

```javascript
import './styles/main.less';
```

### 3. 使用变量

项目中定义了以下变量：

#### 颜色变量
- `@primary-color`: 主色调
- `@secondary-color`: 次要色调
- `@success-color`: 成功色
- `@warning-color`: 警告色
- `@danger-color`: 危险色
- `@light-color`: 浅色
- `@dark-color`: 深色

#### 字体变量
- `@font-family-base`: 基础字体
- `@font-size-base`: 基础字体大小
- `@font-size-lg`: 大字体
- `@font-size-sm`: 小字体

#### 间距变量
- `@spacing-xs`: 超小间距 (4px)
- `@spacing-sm`: 小间距 (8px)
- `@spacing-md`: 中等间距 (16px)
- `@spacing-lg`: 大间距 (24px)
- `@spacing-xl`: 超大间距 (32px)

#### 边框变量
- `@border-radius`: 边框圆角
- `@border-color`: 边框颜色
- `@border-width`: 边框宽度

#### 阴影变量
- `@box-shadow`: 基础阴影
- `@box-shadow-lg`: 大阴影

## Less 特性

### 1. 嵌套语法

```less
.parent {
  color: @primary-color;
  
  .child {
    background: @light-color;
    
    &:hover {
      background: darken(@light-color, 10%);
    }
  }
}
```

### 2. 变量使用

```less
.my-element {
  color: @primary-color;
  padding: @spacing-md;
  border-radius: @border-radius;
}
```

### 3. 混合 (Mixins)

```less
.button-mixin() {
  padding: @spacing-sm @spacing-md;
  border-radius: @border-radius;
  cursor: pointer;
}

.my-button {
  .button-mixin();
  background-color: @primary-color;
  color: white;
}
```

### 4. 函数

```less
.my-element {
  background-color: lighten(@primary-color, 20%);
  border-color: darken(@primary-color, 10%);
}
```

## 最佳实践

1. **使用变量**: 尽量使用预定义的变量，保持样式的一致性
2. **模块化**: 将样式按功能模块化，便于维护
3. **嵌套限制**: 避免过深的嵌套（建议不超过3层）
4. **命名规范**: 使用 BEM 命名规范或类似的命名约定

## 示例组件

查看 `src/components/ExampleComponent.vue` 了解完整的使用示例。 