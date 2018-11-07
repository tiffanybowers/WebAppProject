const router = new VueRouter({
  routes: [
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
})

router.push('/');
