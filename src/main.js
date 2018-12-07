import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'

Vue.config.productionTip = false;

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'de',   // locale
    messages: {     // messages
        en: {
            chair: 'Chair',
            car: 'Car'
        },
        de: {
            chair: 'Stuhl',
            car: 'Auto'
        }
    },
});

new Vue({
    i18n,
    render: h => h(App),
}).$mount('#app');
