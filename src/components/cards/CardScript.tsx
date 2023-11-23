"use client"

import React from 'react'
import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { Script } from '@/utils/data'
import { getScriptStatus, getTaskActions } from '@/utils/getStatus'
import { cn } from '@/lib/utils'
import CardTask from './CardTask'
import ActionsTable from './ActionsTable'

type Props = {
    id: string,
    script: Script
}

export default function CardScript(props: Props) {
    const [selectedTask, setSelectedTask] = React.useState(props.script.tasks[0])

    const { containsUncorrect, allCorrect } = getScriptStatus(props.script)

    return (
        <AccordionItem 
            value={`item-${props.id}`} 
            className={cn(
                'mb-6 border-2 border-solid rounded-md transition-all overflow-hidden hover:bg-muted/20',
                containsUncorrect 
                    ? " dark:border-red-700/90 border-red-600" 
                    : allCorrect 
                        ? " dark:border-green-700/90 border-green-500" 
                        : "hover:border-border"
            )}
        >
            <AccordionTrigger className={cn(
                'py-6 px-3 hover:no-underline no-underline rounded',
                containsUncorrect 
                    ? " dark:bg-red-700/90 dark:hover:bg-red-700 bg-red-600 hover:bg-red-600/90 text-background dark:text-foreground" 
                    : allCorrect 
                        ? " dark:bg-green-700/90 dark:hover:bg-green-700 bg-green-500 hover:bg-green-500/90 text-background dark:text-foreground" 
                        : "hover:bg-accent"
            )}>
                <div className='flex items-center w-full justify-between'>
                    <span className='text-xl font-semibold text-left'>{props.script.displayName}</span>
                    <span className='text-base mr-3'>{props.script.totalTime}</span>
                </div>
            </AccordionTrigger>
            <AccordionContent className='flex items-center gap-3 lg:flex-row flex-col'>
                <ol className="flex flex-col items-start px-3 lg:w-1/2">
                    {props.script.tasks.map((task, index) => {
                        const { correctActions, uncorrectActions } = getTaskActions(task)
                        const isActive = task.displayName === selectedTask.displayName
                        return (
                            <CardTask
                                key={index}
                                index={index}
                                task={task}
                                isActive={isActive}
                                onClick={() => setSelectedTask(task)}
                            />
                        )
                    })}
                </ol>
                <div className='w-1/2 lg:flex hidden'>
                    <ActionsTable 
                        caption={selectedTask.displayName}
                        task={selectedTask}
                    />
                </div>
            </AccordionContent>
        </AccordionItem>
    )
}
