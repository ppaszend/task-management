import {CommentInterface} from "../interface/Comment";

const comments: CommentInterface[] = [
    {
        taskId: 0,
        title: 'Example comment 1',
        content: 'Etiam in blandit erat. Suspendisse fringilla neque in lectus dignissim pellentesque. Nullam turpis tortor, maximus sollicitudin libero ac, sodales porttitor diam. Etiam tempor non ante sed faucibus. Quisque ullamcorper vehicula rutrum. Sed interdum aliquet nulla eu vestibulum. Mauris efficitur odio quis viverra condimentum. Nullam varius ligula elit, ut dignissim urna maximus vel.',
        author: 'John Kowalski',
        created: new Date(),
    },
    {
        taskId: 0,
        title: 'Example comment 2',
        content: 'Etiam in blandit erat. Suspendisse fringilla neque in lectus dignissim pellentesque. Nullam turpis tortor, maximus sollicitudin libero ac, sodales porttitor diam. Etiam tempor non ante sed faucibus. Quisque ullamcorper vehicula rutrum. Sed interdum aliquet nulla eu vestibulum. Mauris efficitur odio quis viverra condimentum. Nullam varius ligula elit, ut dignissim urna maximus vel.',
        author: 'John Kowalski',
        created: new Date(),
    },
    {
        taskId: 0,
        title: 'Example comment 3',
        content: 'Etiam in blandit erat. Suspendisse fringilla neque in lectus dignissim pellentesque. Nullam turpis tortor, maximus sollicitudin libero ac, sodales porttitor diam. Etiam tempor non ante sed faucibus. Quisque ullamcorper vehicula rutrum. Sed interdum aliquet nulla eu vestibulum. Mauris efficitur odio quis viverra condimentum. Nullam varius ligula elit, ut dignissim urna maximus vel.',
        author: 'John Kowalski',
        created: new Date(),
    },
    {
        taskId: 2,
        title: 'Example comment 3',
        content: 'Etiam in blandit erat. Suspendisse fringilla neque in lectus dignissim pellentesque. Nullam turpis tortor, maximus sollicitudin libero ac, sodales porttitor diam. Etiam tempor non ante sed faucibus. Quisque ullamcorper vehicula rutrum. Sed interdum aliquet nulla eu vestibulum. Mauris efficitur odio quis viverra condimentum. Nullam varius ligula elit, ut dignissim urna maximus vel.',
        author: 'John Kowalski',
        created: new Date(),
    },
];

const getCommentsForTask = (taskId: number): CommentInterface[] =>
    comments.filter((comment) => taskId === comment.taskId);


export { getCommentsForTask }

export default comments;