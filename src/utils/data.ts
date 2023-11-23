export type Organization = {
    displayName: string;
    groups: Group[];
}

export type Group = {
    displayName: string;
    users: User[] | null;
}

export type User = {
    displayName: string;
    scripts: Script[];
}

export type Script = {
    displayName: string;
    totalTime: number;
    tasks: Task[]
}

export type Task = {
    displayName: string;
    actions: Action[]
}

export type Action = {
    displayName: string;
    status: "correct" | "uncorrect" | "undone";
}

export const dummyDataSFU = {
	"displayName": "СФУ",
	"groups": [
		{
			"displayName": "НГ21-02",
            "users": [
                {
                    "displayName": "Петров Самуил Рудольфович",
                    "scripts": [
                        {
                            "displayName": "Замена неисправного штуцера",
                            "totalTime": "10:53",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Ввод скважины в работу",
                            "totalTime": "9:45",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Стандартное обслуживание",
                            "totalTime": "10:02",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Обрыв кабеля",
                            "totalTime": "8:28",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Утечка газа",
                            "totalTime": "8:49",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "displayName": "Логинов Самуил Георгьевич",
                    "scripts": [
                        {
                            "displayName": "Замена неисправного штуцера",
                            "totalTime": "10:53",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Ввод скважины в работу",
                            "totalTime": "9:45",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Стандартное обслуживание",
                            "totalTime": "10:02",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Обрыв кабеля",
                            "totalTime": "8:28",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Утечка газа",
                            "totalTime": "8:49",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "displayName": "Филатов Мирослав Геннадьевич",
                    "scripts": [
                        {
                            "displayName": "Замена неисправного штуцера",
                            "totalTime": "10:53",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Ввод скважины в работу",
                            "totalTime": "9:45",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Стандартное обслуживание",
                            "totalTime": "10:02",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Обрыв кабеля",
                            "totalTime": "8:28",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Утечка газа",
                            "totalTime": "8:49",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "displayName": "Антонова Мишель Григорьевна",
                    "scripts": [
                        {
                            "displayName": "Замена неисправного штуцера",
                            "totalTime": "10:53",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Ввод скважины в работу",
                            "totalTime": "9:45",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Стандартное обслуживание",
                            "totalTime": "10:02",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Обрыв кабеля",
                            "totalTime": "8:28",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Утечка газа",
                            "totalTime": "8:49",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "displayName": "Александрова Янита Христофоровна",
                    "scripts": [
                        {
                            "displayName": "Замена неисправного штуцера",
                            "totalTime": "10:53",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Ввод скважины в работу",
                            "totalTime": "9:45",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Стандартное обслуживание",
                            "totalTime": "10:02",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Обрыв кабеля",
                            "totalTime": "8:28",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Утечка газа",
                            "totalTime": "8:49",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "displayName": "Громова Эдуарда Святославовна",
                    "scripts": [
                        {
                            "displayName": "Замена неисправного штуцера",
                            "totalTime": "10:53",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Ввод скважины в работу",
                            "totalTime": "9:45",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Стандартное обслуживание",
                            "totalTime": "10:02",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Обрыв кабеля",
                            "totalTime": "8:28",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Утечка газа",
                            "totalTime": "8:49",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "displayName": "Сазонов Платон Борисович",
                    "scripts": [
                        {
                            "displayName": "Замена неисправного штуцера",
                            "totalTime": "10:53",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Ввод скважины в работу",
                            "totalTime": "9:45",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Стандартное обслуживание",
                            "totalTime": "10:02",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Обрыв кабеля",
                            "totalTime": "8:28",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Утечка газа",
                            "totalTime": "8:49",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "displayName": "Князев Адам Тимурович",
                    "scripts": [
                        {
                            "displayName": "Замена неисправного штуцера",
                            "totalTime": "10:53",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Ввод скважины в работу",
                            "totalTime": "9:45",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Стандартное обслуживание",
                            "totalTime": "10:02",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Обрыв кабеля",
                            "totalTime": "8:28",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Утечка газа",
                            "totalTime": "8:49",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "displayName": "Фокин Ибрагил Аркадьевич",
                    "scripts": [
                        {
                            "displayName": "Замена неисправного штуцера",
                            "totalTime": "10:53",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Ввод скважины в работу",
                            "totalTime": "9:45",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Стандартное обслуживание",
                            "totalTime": "10:02",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Обрыв кабеля",
                            "totalTime": "8:28",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Утечка газа",
                            "totalTime": "8:49",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "displayName": "Молчанова Зоряна Викторовна",
                    "scripts": [
                        {
                            "displayName": "Замена неисправного штуцера",
                            "totalTime": "10:53",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Ввод скважины в работу",
                            "totalTime": "9:45",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Стандартное обслуживание",
                            "totalTime": "10:02",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Обрыв кабеля",
                            "totalTime": "8:28",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Утечка газа",
                            "totalTime": "8:49",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "displayName": "Горшкова Майя Валентиновна",
                    "scripts": [
                        {
                            "displayName": "Замена неисправного штуцера",
                            "totalTime": "10:53",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Ввод скважины в работу",
                            "totalTime": "9:45",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Стандартное обслуживание",
                            "totalTime": "10:02",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Обрыв кабеля",
                            "totalTime": "8:28",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Утечка газа",
                            "totalTime": "8:49",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "displayName": "Шарапова Любава Дмитрьевна",
                    "scripts": [
                        {
                            "displayName": "Замена неисправного штуцера",
                            "totalTime": "10:53",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Ввод скважины в работу",
                            "totalTime": "9:45",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "correct"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "uncorrect"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "correct"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Стандартное обслуживание",
                            "totalTime": "10:02",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Обрыв кабеля",
                            "totalTime": "8:28",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "displayName": "Утечка газа",
                            "totalTime": "8:49",
                            "tasks": [
                                {
                                    "displayName": "Произвести осмотр манометров и отметить буферное давление, линейное давление и давление в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Снять значения со станции управления ЭЦН.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер динамического уровня в затрубном пространстве.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести отбор проб пластовой жидкости.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Произвести замер дебита пластовой жидкости в АГЗУ.",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                },
                                {
                                    "displayName": "Вернуть рабочие инструменты в машину",
                                    "actions": [
                                        {
                                            "displayName": "Поставьте ведро под кран для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь появление нефти.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Подставьте емкость для отбора проб.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Откройте кран.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Дождитесь наполнения емкости.",
                                            "status": "undone"
                                        },
                                        {
                                            "displayName": "Закройте кран.",
                                            "status": "undone"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
		},
		{
			"displayName": "НГ21-03",
            "users": null
		},
		{
			"displayName": "НГ21-04",
            "users": null
		},
		{
			"displayName": "НГ22-01",
            "users": null
		},
		{
			"displayName": "НГ22-02",
            "users": null
		},
		{
			"displayName": "НГ22-03",
            "users": null
		}
	]
} as Organization