module.exports = {
  title: 'Easy Peasy 3.x',
  description: 'Easy Peasy state for React',
  themeConfig: {
    repo: 'ctrlplusb/easy-peasy',

    docsRepo: 'ctrlplusb/easy-peasy',
    docsDir: 'website',
    docsBranch: 'next',

    editLinks: true,
    editLinkText: 'Help us improve this page!',

    lastUpdated: 'Last Updated',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Features', link: '/features/' },
      { text: 'Docs', link: '/docs/' },
      { text: 'Releases', link: '/releases/' },
    ],

    sidebar: {
      '/docs/': [
        'installation',
        'examples',
        {
          title: 'Tutorial',
          children: [
            'tutorial/',
            'tutorial/creating-store',
            'tutorial/integrating-store',
            'tutorial/accessing-state',
            'tutorial/defining-actions',
            'tutorial/dispatching-actions',
            'tutorial/defining-thunks',
            'tutorial/dispatching-thunks',
            'tutorial/defining-selectors',
            'tutorial/accessing-selectors',
            'tutorial/responding-actions',
            'tutorial/final-notes',
          ],
        },
        {
          title: 'API',
          children: [
            'api/',
            'api/action',
            'api/create-component-store',
            'api/create-context-store',
            'api/create-store',
            'api/reducer',
            'api/selector',
            'api/store',
            'api/store-config',
            'api/store-provider',
            'api/thunk',
            'api/use-store-actions',
            'api/use-store-dispatch',
            'api/use-store-state',
          ],
        },
        {
          title: 'Testing',
          children: [
            'testing/',
            'testing/testing-actions',
            'testing/testing-thunks',
          ],
        },
        {
          title: 'Typescript',
          children: [
            'typescript/',
            // 'typescripting-declare-model-interface',
            'typescript/create-your-model',
          ],
        },
        {
          title: 'React Native',
          children: ['react-native/'],
        },
      ],
    },
  },
};