import { Link, useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const post = useLoaderData();

  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{post.name}</h1>
      <h2>{post.language}</h2>

      <div style={{ textAlign: "center" }}>
        <h2>Update</h2>
        <Form method="post" action={`/update/${post.id}`}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            defaultValue={post.name}
          />
          <input
            type="text"
            name="language"
            placeholder="Language"
            defaultValue={post.language}
          />
          <button>Update</button>
        </Form>
        
        <h2>Delete</h2>
        <Form method="post" action={`/delete/${post.id}`}>
          <button>Delete</button>
        </Form>
      </div>
      
      <Link to="/">Back</Link>
    </div>
  );
}

export default Show;
