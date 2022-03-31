export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '62456a74c589f61884bcb93b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-durdg47n',
                  apiId: 'c7bcddde-2dba-4762-b71d-02dab99a6995'
                },
                {
                  buildHookId: '62456a74208f931b4afef11f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1ykbg1k6',
                  apiId: '257647bf-3ae9-44b5-b5bf-e55022f42199'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/0papi/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1ykbg1k6.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
