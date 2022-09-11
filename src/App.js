import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import Input from "./components/Input";
import PostItem from "./components/PostItem";
import "./css/app.css";
import PostList from "./components/postList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/Input/MyInput";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Java1', content: 'Content1'},
        {id: 2, title: 'Java2', content: 'Content2'},
        {id: 3, title: 'Java3', content: 'Content3'},
    ])
    //Чтобы добавить еще один независимый список, нужно раскомментировать
    // const [posts2, setPosts2] = useState([
    //     {id: 1, title: 'Ruby1', content: 'Content1'},
    //     {id: 2, title: 'Ruby2', content: 'Content2'},
    //     {id: 3, title: 'Ruby3', content: 'Content3'},
    // ])

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            title,
            content,
        }
        setPosts([...posts, newPost])
    }

    return (
        <div className="App">
            {/*<ClassCounter/> Закоменитровано*/}
            {/*<Input/>Закоменитровано*/}
            <MyInput
                value={title}
                onChange={e=>setTitle(e.target.value)}
                placeholder ='Введите название поста'/>
            <MyInput
                value={content}
                onChange={e=>setContent(e.target.value)}
                placeholder ='Введите описание поста'/>
            <MyButton onClick = {addNewPost}/>
            <PostList posts = {posts} title = "Список постов 1" id ={1} />
            {/*<PostList posts = {posts2} title = "Список постов 2" />Закомментировано*/}

        </div>

    );
}

export default App;
