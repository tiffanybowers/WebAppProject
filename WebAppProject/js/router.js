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
            }
        ]
    }
]

const router = new VueRouter({
  routes
})

router.push(HomePage);
