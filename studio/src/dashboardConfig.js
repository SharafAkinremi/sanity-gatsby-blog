export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ec3b350530b0bf628f7a386',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-jy8werba',
                  apiId: '726b98dc-5f54-4b67-9152-3645af93d478'
                },
                {
                  buildHookId: '5ec3b351b63fd059c4e79507',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-i5tktpo5',
                  apiId: '01068786-7c33-49e8-aeea-70e2bf80101e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/droidmonk/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-i5tktpo5.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
