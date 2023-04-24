from .types import Todo


def get_all_todo():
    return [
        Todo(content="foo", is_done=False),
        Todo(content="bar", is_done=False),
        Todo(content="buzz", is_done=False),
    ]
