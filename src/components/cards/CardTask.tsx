import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { cn } from '@/lib/utils'
import { Task } from '@/utils/data'
import { getTaskActions } from '@/utils/getStatus'
import ActionsTable from './ActionsTable'
import { ScrollArea } from '../ui/scroll-area'

type Props = {
    index: number,
    task: Task,
    isActive: boolean,
    onClick: React.MouseEventHandler<HTMLDivElement> | undefined
}

export default function CardTask(props: Props) {
    const [openPopover, setOpenPopover] = React.useState(false)

    const { correctActions, uncorrectActions } = getTaskActions(props.task)

    return (<>
        <div 
            onClick={props.onClick}
            className={cn(
                'lg:flex hidden w-full text-left border-2 rounded-md border-border mt-3 hover:bg-accent transition-all cursor-pointer font-medium',
                props.isActive ? "dark:ring-2 ring-[3px] ring-ring ring-offset-4 ring-offset-accent" : "",
                uncorrectActions.length > 0 
                ? " dark:bg-red-700/90 dark:hover:bg-red-700 bg-red-600 hover:bg-red-600/90 text-background dark:text-foreground" 
                : correctActions.length === props.task.actions.length 
                    ? " dark:bg-green-700/90 dark:hover:bg-green-700 bg-green-500 hover:bg-green-500/90 text-background dark:text-foreground" 
                    : "hover:bg-accent"
            )}
        >
            <li className='w-full px-3 py-4 text-base'>
                {props.index+1}. {props.task.displayName}
            </li>
        </div>

        <Popover open={openPopover} onOpenChange={setOpenPopover}>
            <PopoverTrigger className={cn(
                'lg:hidden flex w-full text-left border-2 rounded-md border-border mt-3 hover:bg-accent transition-all font-medium',
                openPopover ? "dark:ring-2 ring-[3px] ring-ring ring-offset-4 ring-offset-accent" : "",
                uncorrectActions.length > 0 
                ? " dark:bg-red-700/90 dark:hover:bg-red-700 bg-red-600 hover:bg-red-600/90 text-background dark:text-foreground" 
                : correctActions.length === props.task.actions.length 
                    ? " dark:bg-green-700/90 dark:hover:bg-green-700 bg-green-500 hover:bg-green-500/90 text-background dark:text-foreground" 
                    : "hover:bg-accent"
            )}>
                <li className='w-full px-3 py-4 text-base'>
                    {props.index+1}. {props.task.displayName}
                </li>
            </PopoverTrigger>
            <PopoverContent side="bottom" className={cn(
                "border-2",
                uncorrectActions.length > 0 
                ? " dark:border-red-700/90 border-red-600" 
                : correctActions.length === props.task.actions.length 
                    ? " dark:border-green-700/90 border-green-500" 
                    : "hover:border-border"
            )}>
                <ScrollArea className="p-2 h-96">
                    <ActionsTable 
                        caption={`${props.index+1}. ${props.task.displayName}`}
                        task={props.task}
                    />
                </ScrollArea>
            </PopoverContent>
        </Popover>
    </>)
}
