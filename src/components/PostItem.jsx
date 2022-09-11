import React from 'react';

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                {console.log(props.post)}
                <h3 className="post__title">{props.number}. {props.post.title}</h3>
                <div className="post__text">
                    {props.post.content}
                </div>
            </div>
            <div className="post__btns">
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;