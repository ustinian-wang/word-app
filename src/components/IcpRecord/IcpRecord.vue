<template>
    <div class="icp-container">
        <a :href="link" target="_blank" rel="noopener noreferrer">{{ text }}</a>
    </div>
</template>

<script>
export default {
    name: 'IcpRecord',
    data() {
        return {
            text: '粤ICP备2025441512号-1',
            link: 'https://beian.miit.gov.cn'
        };
    }
};
</script>

<style scoped>
.icp-container {
    /* padding: 20px 0; */
    text-align: center;
    font-size: 14px;
    color: #888;
}

.icp-container a {
    color: #888;
    text-decoration: none;
}
</style> 