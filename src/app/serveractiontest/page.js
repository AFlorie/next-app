import { createPost } from "@/lib/actions";

const ServerActionTest = () => {
  return (
    <div>
      <form action={createPost}>
        <input type="text" placeholder="Title" name="title" />
        <input type="text" placeholder="Description" name="desc" />
        <input type="text" placeholder="Slug" name="slug" />
        <input type="text" placeholder="UserId" name="userId" />
        <button>Create post</button>
      </form>
    </div>
  );
};

export default ServerActionTest;
