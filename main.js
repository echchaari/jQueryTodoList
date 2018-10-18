
$(init);
function init(){
    var title=$('#title');
    var description=$('#description');
    var addBtn=$('#addBtn');
    var todos=$('#todos');

    addBtn.click(addBtnHandler);

    function addBtnHandler(){
        //console.log('Hello');
        var newTitle=title.val();
        var newDesc=description.val();
        var note=$("<li>").append($("<b>").append(newTitle));
        note.append(" " + newDesc + " ");
        var button=$("<button>X</button>").click(deleteNote);
        note.append(button);
        todos.append(note);
    }

    function deleteNote(event){
        var todo=$(event.currentTarget).parent();
        todo.remove();
    }
}