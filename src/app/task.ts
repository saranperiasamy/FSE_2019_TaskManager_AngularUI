import { ParentTask } from './parent-task';

export class Task {
    constructor(
        public taskId : number,
        public taskName : string,
        public priority : number,
        public startDate : string,
        public endDate : string,
        public completed : number,
        public parentTask: ParentTask
    ){}
}