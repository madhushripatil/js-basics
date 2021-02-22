let blogPost = {
    title: 'You might not need redux',
    body: 'People often choose Redux before they need it.',
    author: 'Dan Abramov',
    views: 1005,
    comments: [
        {
            author: 'Francois Ward',
            body: 'Let’s keep in mind that Redux was not the originator of the movement against local state. It simply got popular as one solution.'
        },
        {
            author: 'Michael Kulinski',
            body: 'It felt like I was forced to use Redux after implementing React-Router into a project.'
        }
    ],
    isLive: true
};

console.log(blogPost);