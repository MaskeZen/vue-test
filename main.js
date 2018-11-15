Vue.component('task-list', {
    template: 
    `<ul>
        <task v-for="task in tasks">{{ task.task }}</task>
    </ul>`,
    data() {
        return {
            tasks: [
                { task: 'Clase de S.O.', complete: true },
                { task: 'Parcial de S.O.', complete: false },
                { task: 'Parcial de AdmInf.', complete: false },
                { task: 'tarea GAIA', complete: true },
                { task: 'Play SCBW', complete: false },
                { task: 'Learn vue', complete: true },
                { task: 'Write something', complete: false },
                { task: 'Check list', complete: true },

            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>',
    data() {
        return {}
    }
});

Vue.component('message', {
    template: `
        <article class="message" v-show="isVisible">
            <div class="message-header">
            <p>{{ title }}</p>
            <button class="delete" aria-label="delete"
                @click="hideModal" ></button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>
    `,
    props: ['title', 'body'],
    data () {
        return {
            isVisible: true
        }
    },
    methods: {
        hideModal() {
            this.isVisible = false
        }
    }
});

// 10 - Eventos (modal)
Vue.component('modal', {
    template: `
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <slot></slot>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close"
            @click="$emit('close')">
        </button>
    </div>`
})

// 11 - Tabs


new Vue({
    el: '#root',
    data: {
        showModal: false
    }
});