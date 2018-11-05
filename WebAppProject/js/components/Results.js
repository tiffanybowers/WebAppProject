const Results = {
    template: `
        <div>
            <div v-if="!showSpinner">
                <div v-if="movieList.length < 1">
                    <h3 style="font-family: Cambria; margin-left: 10px;">No Results Found</h3>
                </div>
                <div v-else>
                    <ul class="uk-grid-match uk-child-width-1-3@m uk-text-left" uk-grid>
                        
                        <li v-for="(obj, index) in movieList" style="font-family: Cambria;">
                            <a  @click.prevent="getMoreInfo(obj.id)" :href="'#modal-overflow' + index" class="uk-link-reset" uk-toggle>

                                <div class="uk-card uk-card-default uk-card-body">
                                    <div>
                                        <div>
                                            <div>
                                                <span style="font-family: Cambria;font-size:24pt;">{{ obj.title }}</span>
                                            </div>
                                            <div style="font-family:Cambria;"><strong>Release date: </strong>{{ obj.release_date }}</div>
                                        </div>
                                    </div>
                                
                                    <div>
                                        <div>
                                            <div :id="'modal-overflow'+index" uk-modal>
                                                <div class="uk-modal-dialog">

                                                    <button class="uk-modal-close-default" type="button" uk-close></button>

                                                    <div class="uk-modal-header">
                                                        <h2 style="font-family: Cambria;" class="uk-modal-title">{{ obj.title }}</h2>
                                                    </div>
                                                
                                                    <div class="uk-modal-body" uk-overflow-auto>
                                                     <div v-if="!showMoreSpinner" style="font-family: Cambria; margin-left: 10px;">
                                                            <div v-for="(val, key, index) in moreInfoList">
                                                                <div v-if="Array.isArray(val)" >
                                                                    <div v-for="(obj, index) in val">
                                                                        <div v-for="(val, key, index) in obj">
                                                                            <strong>{{ key }}</strong> : {{val}}
                                                                        </div> 
                                                                    </div>
                                                                </div>
                                                                <div v-else-if="typeof(val) === 'object'">
                                                                    <div v-for="(val, key, index) in val">
                                                                        <strong>{{ key }}</strong> : {{val}}
                                                                    </div> 
                                                                </div>
                                                                <div v-else>
                                                                    <strong>{{ key }}</strong> : {{ val }}
                                                                </div>
                                                            
                                                            </div>
                                                        </div>
                                                        <div v-else>
                                                            <span style="margin-left: 14em; margin-top: 3em;" uk-spinner="ratio: 3"></span>
                                                        </div>
                                                       
                                                    </div>

                                                    <div class="uk-modal-footer uk-text-right">
                                                        <button class="uk-button uk-button-default uk-modal-close" type="button">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <ul class="uk-list uk-list-divider">
                                        <li style="margin-left: 1em;font-family: Cambria;" v-for="(val, key, index) in obj">
                                            <strong>{{ key }}</strong> : {{ val }}
                                        </li>
                                    </ul>
                                </div>
                            
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div v-else>
                <span style="margin-left: 40em; margin-top: 10em;" uk-spinner="ratio: 3"></span>
            </div>
        </div>
    `,
    props: {
        movieList: {
            type: Array,
            required: true
        },
        showSpinner: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            moreInfoList: [],
            showMoreSpinner: false
        }
    },
    methods: {
        getMoreInfo(id) {
            this.showMoreSpinner = true;
            get(
                '/movie/' + id,
                (res) => {
                    if (res.status === 200) {
                        this.moreInfoList = res.data;
                    }
                },
                (err) => {
                    console.error(err);
                },
                (final) => {
                    this.showMoreSpinner = false;
                }
            )
        }
    }
}
