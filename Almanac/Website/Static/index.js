function deleteNote(noteId){
    fetch('/delete-note',{
        method: 'POST',
        body: JSON.stringify({ noteId: noteId}),
    }).then((_res) => {
        window.location.href = '/';
    });
}

function deleteFile(fId){
    fetch('/delete-file/' + fId,{
        method: 'DELETE',
        body: JSON.stringify({ fId: fId}),
    }).then((_res) => {
        
        window.location.href = '/';
    });
}