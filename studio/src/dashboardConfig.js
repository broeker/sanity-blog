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
                  buildHookId: '5f6fcd38b444f54ccabe1585',
                  title: 'Sanity Studio',
                  name: 'sanity-blog-studio-anrwn1xj',
                  apiId: '11ae6491-ce03-4180-a905-692e264e55f4'
                },
                {
                  buildHookId: '5f6fcd38108321c91abff586',
                  title: 'Blog Website',
                  name: 'sanity-blog-web-rsx5y8zi',
                  apiId: 'cb011091-63ac-4d40-9e33-b9a4197cf977'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/broeker/sanity-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-blog-web-rsx5y8zi.netlify.app', category: 'apps' }
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
