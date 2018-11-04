const routes = [
    {
        path: '/', 
        component: HomePage,
        children: [
            {
                path: 'popular', 
                component: Popular
            },
            {
                path: 'search', 
                component: Search
            },
            {
                path: 'watchlater', 
                component: WatchLater
            },
        ]
    }
]

const router = new VueRouter({
  routes
})