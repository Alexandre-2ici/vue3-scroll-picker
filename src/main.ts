import { App, Plugin } from 'vue';
import ScrollPicker from './ScrollPicker.vue'

const install = (app: App) => {
  app.component('scroll-picker', ScrollPicker)
}

ScrollPicker.install = install;

export default ScrollPicker as unknown as Plugin;