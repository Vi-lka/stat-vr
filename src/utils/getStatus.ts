import { Action, Script, Task } from "./data";

export function getScriptStatus(script: Script) {
    const containsUncorrect = script.tasks.some((task) => {
        const { uncorrectActions } = getTaskActions(task);
        if (uncorrectActions.length > 0) return true
        else return false
    });

    const correctTasks = script.tasks.map((task) => {
        const { correctActions } = getTaskActions(task);
        if (correctActions.length === task.actions.length) return task
    }).filter((item): item is Task => !!item)

    const allCorrect = correctTasks.length === script.tasks.length ? true : false;

    return { containsUncorrect, allCorrect, correctTasks };
}

export function getTaskActions(task: Task) {
    const correctActions = task.actions.map(action => {
        if (action.status === "correct") return action
    }).filter((item): item is Action => !!item)

    const uncorrectActions = task.actions.map(action => {
        if (action.status === "uncorrect") return action
    }).filter((item): item is Action => !!item)

    const undoneActions = task.actions.map(action => {
        if (action.status === "undone") return action
    }).filter((item): item is Action => !!item)

    return { correctActions, uncorrectActions, undoneActions }
}