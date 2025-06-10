<template>
  <div class="index-page">
    <div class="bg-img"></div>
    <div class="content">
      <div class="daily-word-block">
        <div class="daily-label">每日精选单词</div>
        <div class="daily-word">{{ dailyWord.en }}</div>
        <div class="daily-zh">{{ dailyWord.zh }}</div>
      </div>
      <div class="daily-sentence-block">
        <div class="sentence-label">每日英文句子</div>
        <div class="sentence-en">“{{ dailySentence.en }}”</div>
        <div class="sentence-zh">{{ dailySentence.zh }}</div>
      </div>
      <button class="start-btn" @click="goWords">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { STUDY_STATUS_DEF } from '@/store/index.js';

export default {
  name: 'Index',
  data() {
    return {
      // 这里可用接口或本地随机，示例写死
      dailyWord: { en: 'serendipity', zh: '意外发现美好事物的能力' },
      dailySentence: {
        en: 'The best way to get started is to quit talking and begin doing.',
        zh: '开始的最好方法就是停止空谈并付诸行动。'
      }
    };
  },
  methods: {
    goWords() {

      this.$router.push('/words');
    }
  },
  computed: {
    ...mapState(['study_status']),
    buttonText() {
      switch (this.study_status) {
        case STUDY_STATUS_DEF.DEFAULT:
          return '开始背单词';
        case STUDY_STATUS_DEF.LEARNING:
          return '继续背单词';
        case STUDY_STATUS_DEF.LEARNED:
          return '复习';
      }
    }
  }
};
</script>

<style scoped>
.index-page {
  min-height: 100vh;
  width: 100vw;
  position: relative;
  background: #f8fafc;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bg-img {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80') center/cover no-repeat;
  opacity: 0.18;
  z-index: 1;
}
.content {
  position: relative;
  z-index: 2;
  width: 100vw;
  max-width: 420px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 10vh;
}
.daily-word-block {
  /* background: #fff; */
  border-radius: 14px;
  /* box-shadow: 0 4px 24px rgba(60,60,60,0.08); */
  padding: 28px 24px 18px 24px;
  margin-bottom: 24px;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
}
.daily-label {
  color: #3578e5;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 8px;
  letter-spacing: 1px;
}
.daily-word {
  font-size: 32px;
  font-weight: bold;
  color: #222;
  margin-bottom: 8px;
}
.daily-zh {
  font-size: 18px;
  color: #666;
}
.daily-sentence-block {
  /* background: #f0f4fa; */
  border-radius: 12px;
  padding: 18px 18px 12px 18px;
  margin-bottom: 32px;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
}
.sentence-label {
  color: #4f8cff;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
}
.sentence-en {
  font-size: 18px;
  color: #333;
  margin-bottom: 6px;
}
.sentence-zh {
  font-size: 15px;
  color: #888;
}
.start-btn {
  background: linear-gradient(90deg, #4f8cff 0%, #6ed0ff 100%);
  color: #fff;
  border: none;
  border-radius: 24px;
  font-size: 18px;
  font-weight: 700;
  padding: 14px 48px;
  margin-top: 12px;
  box-shadow: 0 2px 8px rgba(79,140,255,0.08);
  cursor: pointer;
  transition: background 0.2s;
  letter-spacing: 2px;

  position: fixed;
  bottom: 10vh;
}
.start-btn:active {
  background: linear-gradient(90deg, #3578e5 0%, #4f8cff 100%);
}
</style>
