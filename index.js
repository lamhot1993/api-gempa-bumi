const api_gempa_bumi = 'https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json';

const {
    createApp
} = Vue

createApp({
    data() {
        return {
            title: 'Gempa Bumi Dirasakan',
            gempa_bumi: [],
            loading: true
        }
    },
    methods: {
        loadData: async function() {
            const response = await fetch(api_gempa_bumi);
            const data = await response.json();
            console.log(data.Infogempa.gempa);
            this.gempa_bumi = data.Infogempa.gempa
            this.loading = false
        }
    },
    mounted() {
        this.loadData();
    },
}).mount('#app')