import TaskInterface from "../interface/Task";

const taskList: TaskInterface[] = [
    {
        id: 0,
        name: 'Example Task 1',
        description: 'Morbi at nibh mi. Proin a nisi vitae mauris lobortis ultrices. Morbi tempus ultrices risus, id tristique turpis egestas nec. Aliquam convallis justo et egestas aliquam. Ut tempus urna eleifend, imperdiet mi ac, aliquet ligula. Curabitur sodales ultrices eros. Vestibulum eu nulla quis turpis consectetur aliquam eu id mi. Suspendisse tincidunt, ante eu dictum dignissim, felis urna rutrum odio, at accumsan ligula nulla ac purus. Maecenas congue nibh eget sem sagittis, aliquet sollicitudin diam egestas.\n\nDuis ornare nisl eu volutpat condimentum. Vestibulum et nisl sit amet enim malesuada feugiat. Etiam nibh neque, sodales sit amet tellus quis, viverra suscipit velit. Duis dignissim diam sapien, eu efficitur eros pretium quis. Proin quis fermentum eros. Donec vitae venenatis libero, sed hendrerit massa. Nam dolor elit, feugiat sit amet ullamcorper eu, ornare non sem. Cras vitae erat quam. Etiam ac facilisis urna. Nunc venenatis, diam ut fermentum elementum, lacus augue vulputate mi, vitae mattis est quam at erat. Curabitur malesuada sapien imperdiet libero maximus molestie. Vestibulum dignissim ante purus, eu lobortis justo pellentesque a. Nunc porta vel dui sed varius. Curabitur velit velit, lobortis vitae massa commodo, egestas elementum massa. Fusce sit amet nulla ut ipsum dictum euismod.\n\nFusce rhoncus risus sit amet tortor gravida, fringilla hendrerit mauris aliquam. Vestibulum aliquam ex nunc. Nullam auctor augue id magna sagittis, ut ultrices ex egestas. Praesent quis erat ut nisl iaculis molestie. Vivamus porttitor, est nec congue pretium, libero nisl venenatis lectus, sit amet ultrices est metus eget risus. Sed vitae erat lacus. Integer id neque velit. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        properties: {
            stage: 'todo',
            priority: 'critical',
            assignee: 'amickiewicz@gmail.com',
            project: 'core',
            type: 'feature',
            estimation: '8h',
            spentTime: '2h'
        },
    },
    {
        id: 1,
        name: 'Example Task 2',
        description: 'Morbi at nibh mi. Proin a nisi vitae mauris lobortis ultrices. Morbi tempus ultrices risus, id tristique turpis egestas nec. Aliquam convallis justo et egestas aliquam. Ut tempus urna eleifend, imperdiet mi ac, aliquet ligula. Curabitur sodales ultrices eros. Vestibulum eu nulla quis turpis consectetur aliquam eu id mi. Suspendisse tincidunt, ante eu dictum dignissim, felis urna rutrum odio, at accumsan ligula nulla ac purus. Maecenas congue nibh eget sem sagittis, aliquet sollicitudin diam egestas.\n\nDuis ornare nisl eu volutpat condimentum. Vestibulum et nisl sit amet enim malesuada feugiat. Etiam nibh neque, sodales sit amet tellus quis, viverra suscipit velit. Duis dignissim diam sapien, eu efficitur eros pretium quis. Proin quis fermentum eros. Donec vitae venenatis libero, sed hendrerit massa. Nam dolor elit, feugiat sit amet ullamcorper eu, ornare non sem. Cras vitae erat quam. Etiam ac facilisis urna. Nunc venenatis, diam ut fermentum elementum, lacus augue vulputate mi, vitae mattis est quam at erat. Curabitur malesuada sapien imperdiet libero maximus molestie. Vestibulum dignissim ante purus, eu lobortis justo pellentesque a. Nunc porta vel dui sed varius. Curabitur velit velit, lobortis vitae massa commodo, egestas elementum massa. Fusce sit amet nulla ut ipsum dictum euismod.\n\nFusce rhoncus risus sit amet tortor gravida, fringilla hendrerit mauris aliquam. Vestibulum aliquam ex nunc. Nullam auctor augue id magna sagittis, ut ultrices ex egestas. Praesent quis erat ut nisl iaculis molestie. Vivamus porttitor, est nec congue pretium, libero nisl venenatis lectus, sit amet ultrices est metus eget risus. Sed vitae erat lacus. Integer id neque velit. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        properties: {
            stage: 'todo',
            priority: 'critical',
            assignee: 'amickiewicz@gmail.com',
            project: 'core',
            type: 'feature',
            estimation: '8h',
            spentTime: '2h'
        },
    },
    {
        id: 2,
        name: 'Example Task 3',
        description: 'Morbi at nibh mi. Proin a nisi vitae mauris lobortis ultrices. Morbi tempus ultrices risus, id tristique turpis egestas nec. Aliquam convallis justo et egestas aliquam. Ut tempus urna eleifend, imperdiet mi ac, aliquet ligula. Curabitur sodales ultrices eros. Vestibulum eu nulla quis turpis consectetur aliquam eu id mi. Suspendisse tincidunt, ante eu dictum dignissim, felis urna rutrum odio, at accumsan ligula nulla ac purus. Maecenas congue nibh eget sem sagittis, aliquet sollicitudin diam egestas.\n\nDuis ornare nisl eu volutpat condimentum. Vestibulum et nisl sit amet enim malesuada feugiat. Etiam nibh neque, sodales sit amet tellus quis, viverra suscipit velit. Duis dignissim diam sapien, eu efficitur eros pretium quis. Proin quis fermentum eros. Donec vitae venenatis libero, sed hendrerit massa. Nam dolor elit, feugiat sit amet ullamcorper eu, ornare non sem. Cras vitae erat quam. Etiam ac facilisis urna. Nunc venenatis, diam ut fermentum elementum, lacus augue vulputate mi, vitae mattis est quam at erat. Curabitur malesuada sapien imperdiet libero maximus molestie. Vestibulum dignissim ante purus, eu lobortis justo pellentesque a. Nunc porta vel dui sed varius. Curabitur velit velit, lobortis vitae massa commodo, egestas elementum massa. Fusce sit amet nulla ut ipsum dictum euismod.\n\nFusce rhoncus risus sit amet tortor gravida, fringilla hendrerit mauris aliquam. Vestibulum aliquam ex nunc. Nullam auctor augue id magna sagittis, ut ultrices ex egestas. Praesent quis erat ut nisl iaculis molestie. Vivamus porttitor, est nec congue pretium, libero nisl venenatis lectus, sit amet ultrices est metus eget risus. Sed vitae erat lacus. Integer id neque velit. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        properties: {
            stage: 'todo',
            priority: 'critical',
            assignee: 'amickiewicz@gmail.com',
            project: 'core',
            type: 'feature',
            estimation: '8h',
            spentTime: '2h'
        },
    },
    {
        id: 3,
        name: 'Example Task 4',
        description: 'Morbi at nibh mi. Proin a nisi vitae mauris lobortis ultrices. Morbi tempus ultrices risus, id tristique turpis egestas nec. Aliquam convallis justo et egestas aliquam. Ut tempus urna eleifend, imperdiet mi ac, aliquet ligula. Curabitur sodales ultrices eros. Vestibulum eu nulla quis turpis consectetur aliquam eu id mi. Suspendisse tincidunt, ante eu dictum dignissim, felis urna rutrum odio, at accumsan ligula nulla ac purus. Maecenas congue nibh eget sem sagittis, aliquet sollicitudin diam egestas.\n\nDuis ornare nisl eu volutpat condimentum. Vestibulum et nisl sit amet enim malesuada feugiat. Etiam nibh neque, sodales sit amet tellus quis, viverra suscipit velit. Duis dignissim diam sapien, eu efficitur eros pretium quis. Proin quis fermentum eros. Donec vitae venenatis libero, sed hendrerit massa. Nam dolor elit, feugiat sit amet ullamcorper eu, ornare non sem. Cras vitae erat quam. Etiam ac facilisis urna. Nunc venenatis, diam ut fermentum elementum, lacus augue vulputate mi, vitae mattis est quam at erat. Curabitur malesuada sapien imperdiet libero maximus molestie. Vestibulum dignissim ante purus, eu lobortis justo pellentesque a. Nunc porta vel dui sed varius. Curabitur velit velit, lobortis vitae massa commodo, egestas elementum massa. Fusce sit amet nulla ut ipsum dictum euismod.\n\nFusce rhoncus risus sit amet tortor gravida, fringilla hendrerit mauris aliquam. Vestibulum aliquam ex nunc. Nullam auctor augue id magna sagittis, ut ultrices ex egestas. Praesent quis erat ut nisl iaculis molestie. Vivamus porttitor, est nec congue pretium, libero nisl venenatis lectus, sit amet ultrices est metus eget risus. Sed vitae erat lacus. Integer id neque velit. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        properties: {
            stage: 'todo',
            priority: 'critical',
            assignee: 'amickiewicz@gmail.com',
            project: 'core',
            type: 'feature',
            estimation: '8h',
            spentTime: '2h'
        },
    },
    {
        id: 4,
        name: 'Example Task 5',
        description: 'Morbi at nibh mi. Proin a nisi vitae mauris lobortis ultrices. Morbi tempus ultrices risus, id tristique turpis egestas nec. Aliquam convallis justo et egestas aliquam. Ut tempus urna eleifend, imperdiet mi ac, aliquet ligula. Curabitur sodales ultrices eros. Vestibulum eu nulla quis turpis consectetur aliquam eu id mi. Suspendisse tincidunt, ante eu dictum dignissim, felis urna rutrum odio, at accumsan ligula nulla ac purus. Maecenas congue nibh eget sem sagittis, aliquet sollicitudin diam egestas.\n\nDuis ornare nisl eu volutpat condimentum. Vestibulum et nisl sit amet enim malesuada feugiat. Etiam nibh neque, sodales sit amet tellus quis, viverra suscipit velit. Duis dignissim diam sapien, eu efficitur eros pretium quis. Proin quis fermentum eros. Donec vitae venenatis libero, sed hendrerit massa. Nam dolor elit, feugiat sit amet ullamcorper eu, ornare non sem. Cras vitae erat quam. Etiam ac facilisis urna. Nunc venenatis, diam ut fermentum elementum, lacus augue vulputate mi, vitae mattis est quam at erat. Curabitur malesuada sapien imperdiet libero maximus molestie. Vestibulum dignissim ante purus, eu lobortis justo pellentesque a. Nunc porta vel dui sed varius. Curabitur velit velit, lobortis vitae massa commodo, egestas elementum massa. Fusce sit amet nulla ut ipsum dictum euismod.\n\nFusce rhoncus risus sit amet tortor gravida, fringilla hendrerit mauris aliquam. Vestibulum aliquam ex nunc. Nullam auctor augue id magna sagittis, ut ultrices ex egestas. Praesent quis erat ut nisl iaculis molestie. Vivamus porttitor, est nec congue pretium, libero nisl venenatis lectus, sit amet ultrices est metus eget risus. Sed vitae erat lacus. Integer id neque velit. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        properties: {
            stage: 'todo',
            priority: 'critical',
            assignee: 'amickiewicz@gmail.com',
            project: 'core',
            type: 'feature',
            estimation: '8h',
            spentTime: '2h'
        },
    },
];

function getTaskById(id: number) {
    return taskList.find(task => id === task.id);
}

export default taskList;

export { getTaskById };