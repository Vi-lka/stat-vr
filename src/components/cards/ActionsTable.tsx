import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Task } from '@/utils/data';
import { cn } from '@/lib/utils';

type Props = {
    caption: string;
    task: Task;
}

export default function ActionsTable(props: Props) {
    return (
        <Table>
            <TableCaption className='text-xs'>{props.caption}</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className='text-center uppercase'>Действия</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {props.task.actions.map((action, index) => {
                    const correct = action.status === "correct"
                    const uncorrect = action.status === "uncorrect"
                    return (
                        <TableRow key={index} className={cn(
                            uncorrect 
                            ? " dark:bg-red-700/90 dark:hover:bg-red-700 bg-red-600 hover:bg-red-600/90 text-background dark:text-foreground" 
                            : correct
                                ? " dark:bg-green-700/90 dark:hover:bg-green-700 bg-green-500 hover:bg-green-500/90 text-background dark:text-foreground" 
                                : "hover:bg-accent"
                        )}>
                            <TableCell>{action.displayName}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}
