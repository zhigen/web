Vue.component('my-a', {
    props: ['d'],
    template: '<a @click="view(d.name)">{{d.label}}</a>',
    methods: {
        view: function (name) {
            app.componentName=name;
        }
    }
});

Vue.component('my-li', {
    props: ['d'],
    template: '<li><my-a :d="d"></my-a></li>'
});

Vue.component('my-ul', {
    props: ['d'],
    template: '<ul><my-li v-for="m in d.ad" :d="m" :key="m.label"></my-li></ul>'
});

Vue.component('my-element', {
    props: ['d'],
    template: '<h1>标题&lt;h1&gt;</h1>'
});

var app = new Vue({
    el: '#app',
    data: {
        componentName: 'my-ul',
        d: {
            ad: [
                {name: 'my-element', label: '元素'},
                {name: 'my-css', label: '样式'}
            ]
        }
    }
});

app.d.ad.push({name: 'my-js', label: '脚本'});