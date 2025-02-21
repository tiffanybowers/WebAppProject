const HomePage = {
    template: `
        <div>
            <nav style="background-color:black;" class="uk-navbar-container" uk-navbar>
                <div class="uk-navbar-left">
                    <ul class="uk-navbar-nav">
                        <li v-for="(item, index) in links" class="uk-active" >
                            <router-link :to="item.link" style="color:white; font-family: Cambria;">
                                {{ item.text }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </nav>
            <router-view></router-view>
        </div>
    `,
    data() {
        return {
            links: [
                { text: 'Search', link: '/search' },
                { text: 'Popular', link: '/popular' }
            ]
        }
    }
}
