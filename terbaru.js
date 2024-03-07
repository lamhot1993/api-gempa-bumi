const api_gempa_bumi = 'https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json';

const {
    createApp
} = Vue

createApp({
    data() {
        return {
            title: 'Gempa Bumi Terbaru',
            wilayah: null,
            dirasakan: null,
            potensi: null,
            wilayah: null,
            kedalaman: null,
            magnitude: null,
            loading: true
        }
    },
    methods: {
        loadData: async function() {
            const response = await fetch(api_gempa_bumi);
            const data = await response.json();

            const result = data.Infogempa.gempa;

            this.wilayah = result.Wilayah;
            this.potensi = result.Potensi;
            this.magnitude = result.Magnitude;
            this.kedalaman = result.Kedalaman;

            this.loading = false

        }
    },
    mounted() {
        this.loadData();
    },
}).mount('#app')