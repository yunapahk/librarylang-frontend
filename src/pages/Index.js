import Post from '../components/Post';
import {useLoaderData, Form} from 'react-router-dom';

function Index (props){

    // fetch the loaderdata using the useLoaderData hook
    const libraries = useLoaderData()

    // map over the libraries and create a Post component for each todo
    return <>
    <div style={{textAlign: "center"}}>
        <h2>Create New</h2>
        <Form method="post" action="/create">
            <input type="text" name="name" placeholder="Name"/>
            <input type="text" name="language" placeholder="Language"/>
            <button>Create New</button>
        </Form>
    </div>
    {libraries.map((library) => <Post key={library.id} post={library}/>)}
    </>

}

export default Index;