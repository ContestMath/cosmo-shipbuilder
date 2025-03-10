//This is for detecting key inputs and handling them

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "z") {
        undo()
    }
});

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "x") {
        cut()
    }
});

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "c") {
        copy()
    }
});

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "v") {
        paste()
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "1") {
        ChangeCursorMode("Place")
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "2") {
        ChangeCursorMode("Select")
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "3") {
        ChangeCursorMode("Delete")
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "4") {
        ChangeCursorMode("Move")
    }
});

function undo() {
    if (ship_action_history_depth <= ship_action_history.length && ship_action_history.length>0) {
        ship_action_history_depth == ship_action_history_depth - 1
        excecuteAction(inverseAction(getCurrentLastAction()))
    }
}

function cut() {
    copy()
    action = {type: "remove_parts", objects: global_selected_sprites}
    excecuteAction(action)
    ship_action_history.push(action)
}

function copy() {}

function paste() {
    global_sprites_to_place = absoluteToRalativePartCoordinates(partsCopy(global_selected_sprites))
    ChangeCursorMode("Place")
}
