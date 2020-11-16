export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb20259f97cbd131fb7b370',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-a3supa8t',
                  apiId: '5ebf94da-c45f-4dd5-be53-ea9266e67b68'
                },
                {
                  buildHookId: '5fb202597cbead1b869d23f7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-8e1ogxkx',
                  apiId: '0f69d4d4-c553-4c97-94d1-a6e5964c2173'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kvasss/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-8e1ogxkx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
