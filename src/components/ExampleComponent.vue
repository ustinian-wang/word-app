<template>
  <div class="example-component">
    <div class="container">
      <div class="card">
        <div class="card-header">
          Less语法示例
        </div>
        <div class="card-body">
          <p>这是一个使用Less语法的Vue组件示例。</p>
          <div class="button-group">
            <button class="btn btn-primary">主要按钮</button>
            <button class="btn btn-secondary">次要按钮</button>
            <button class="btn btn-success">成功按钮</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExampleComponent',
  data() {
    return {
      message: 'Hello Less!'
    }
  }
}
</script>

<style lang="less" scoped>
// 导入变量文件
@import '../styles/variables.less';

.example-component {
  padding: @spacing-lg;
  
  .button-group {
    margin-top: @spacing-md;
    
    .btn {
      margin-right: @spacing-sm;
      
      &:last-child {
        margin-right: 0;
      }
    }
  }
  
  // 使用嵌套语法
  .card {
    // 自定义卡片样式
    border: 2px solid @primary-color;
    
    .card-header {
      color: @primary-color;
    }
    
    .card-body {
      p {
        margin-bottom: @spacing-md;
        font-size: @font-size-base;
      }
    }
  }
  
  // 使用混合(mixin)语法
  .custom-button {
    .btn();
    background: linear-gradient(45deg, @primary-color, lighten(@primary-color, 20%));
    border: none;
    color: white;
    font-weight: bold;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: @box-shadow-lg;
    }
  }
}
</style> 