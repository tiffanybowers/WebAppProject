const Search = {
    template: `
    <div>
        <h1 style="font-family: Cambria; margin-left: 10px;">Search</h1>
        <form @submit.prevent="searchMovies">
            <fieldset class="uk-fieldset">
                <div class="uk-margin">
                    <input style="cursor: pointer;" v-model="search.value" class="uk-input" pattern="^([0-9,a-z,A-Z, ]){2,50}$" type="search" placeholder="Search...">
                </div>
            </fieldset>
        </form>
        <Results :movieList="search.results" :showSpinner="showSpinner"/>
    </div>`,
    components: {
        Results
    },
    data() {
        return {
            search: {
                value: null,
                results: []
            },
            showSpinner: false
        }
    },
    methods: {
        searchMovies() {
            if (String(this.search.value).trim().length > 2) {
                this.showSpinner = true;
                getParams(
                    '/search/movie',
                    {
                        query: this.search.value
                    },
                    (res) => {
                        if (res.status === 200) {
                            this.search.results = res.data.results;
                        }
                    },
                    (err) => {
                        console.log(err);
                    },
                    (final) => {
                        this.showSpinner = false;
                    }
                )
            } else {
                console.error('[Invalid Search Text Length]');
            }
            
        }
    }
}