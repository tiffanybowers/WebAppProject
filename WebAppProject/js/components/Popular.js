const Popular = {
    template: `
        <div>
            <h1 style="font-family: Cambria; margin-left: 10px;">Popular Movies</h1>
            <Results 
                :movieList="movieList" 
                :showSpinner="showSpinner"/>
        </div>
    `,
    components: {
        Results
    },
    data() {
        return {
            movieList: [],
            baseUrl: BASE_URL,
            apiKey: "?api_key=" + API_KEY,
            showSpinner: true,
            moreInfoList: [],
            moreInfoSpinner: false
        }
    },
    mounted() {
        get(
            '/movie/popular',
            (res) => {
                if (res.status === 200) {
                    this.movieList = res.data.results;
                }
            },
            (err) => {
                console.log(err);
            },
            (final) => {
                this.showSpinner = false;
            }
        )
    }
}