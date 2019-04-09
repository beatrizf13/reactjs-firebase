import React from "react";

const List = ({ comments, onRemove, onEdit }) => (
    <div style={{marginTop: 20}}>
        {
            comments.map( comment => (
                <div key={comment.uid}>
                    <strong>Nome: {comment.name}</strong>
                    <p>Comentário: {comment.comment}</p>
                    <em>Postado em {comment.createAt}</em>
                    <br />
                    <button onClick={() => onRemove(comment.uid)}>
                        Excluir
                    </button>
                    <br />
                    <button onClick={() => onEdit(comment.uid)}>
                        Editar
                    </button>
                    <hr />
                </div>
            ))
        }
        {comments.length === 0  && <p>No comments</p>}
    </div>
);

export default List;