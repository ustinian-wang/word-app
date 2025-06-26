import Vue from 'vue';
import Router from 'vue-router';
import { RouterDef } from './RouterDef';

Vue.use(Router);

const router = new Router({
    routes: Object.values(RouterDef)
});

export default router;

export function gotoIndex() {
    router.push(RouterDef.Index.path);
}

export function gotoWords() {
    router.push(RouterDef.Words.path);
}

export function gotoReviewWords() {
    console.log('[gotoReviewWords]');
    router.push(RouterDef.ReviewWords.path);
}

export function gotoWordBooks() {
    router.push(RouterDef.WordBooks.path);
}

export function gotoRecognize() {
    router.push(RouterDef.Recognize.path);
}

export function gotoRedirect(path) {
    router.push(`${RouterDef.Redirect.path}${path}`);
}

export function gotoSettings() {
    router.push(RouterDef.Settings.path);
}

export function gotoRecords() {
    router.push(RouterDef.Records.path);
}
