/* eslint-disable */

// src/plugins/icons.js
import Vue from 'vue';
import { Icon } from '@iconify/vue2';

// 导入需要的图标
import mdiLoading from '@iconify/icons-mdi/loading';
import mdiClose from '@iconify/icons-mdi/close';
import mdiWeb from '@iconify/icons-mdi/web';
import mdiRefresh from '@iconify/icons-mdi/refresh';
import mdiPlus from '@iconify/icons-mdi/plus';
import mdiCheck from '@iconify/icons-mdi/check';
import mdiBookOpenVariant from '@iconify/icons-mdi/book-open-variant';

// 注册 Iconify 组件
Vue.component('Icon', Icon);

// 注册需要本地化的图标
Icon.addIcon('mdi:loading', mdiLoading);
Icon.addIcon('mdi:close', mdiClose);
Icon.addIcon('mdi:web', mdiWeb);
Icon.addIcon('mdi:refresh', mdiRefresh);
Icon.addIcon('mdi:plus', mdiPlus);
Icon.addIcon('mdi:check', mdiCheck);
Icon.addIcon('mdi:book-open-variant', mdiBookOpenVariant); 