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



new Vue({
    el: '#root'
});