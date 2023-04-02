export default interface TaskInterface {
    id: number;
    name: string;
    description: string;
    properties: {
        stage: string;
        priority: string;
        assignee: string;
        project: string;
        type: string;
        estimation: string;
        spentTime: string;
    };
}