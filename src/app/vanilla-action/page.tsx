import { db } from "~/server/db";
import type { inferAsyncReturnType } from "@trpc/server";
import { posts } from "~/server/db/schema";
import { revalidatePath } from "next/cache";

export default async function Home() {
  const posts = await db.query.posts.findMany();

  return (
    <div className="container flex max-w-2xl flex-col gap-24 px-4 py-16">
      <div className="flex flex-col text-xl">
        <h1 className="text-2xl font-bold">Posts</h1>
        {posts.map((post) => (
          <PostView post={post} key={post.id} />
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Create a new post</h1>
        <CreatePost />
      </div>
    </div>
  );
}

type PostType = NonNullable<
  inferAsyncReturnType<typeof db.query.posts.findFirst>
>;

function PostView({ post }: { post: PostType }) {
  return <div>{post.name}</div>;
}

function CreatePost() {
  async function createPostAction(formData: FormData) {
    "use server";
    // Get name from formData
    const name = formData.get("post-name") as string;

    // Insert into DB
    await db.insert(posts).values({ name });

    // Revalidate page to see new content
    revalidatePath("/vanilla-action");

    // NOTE: This will NOT wipe the form data since no navigation occurred
  }

  return (
    <form action={createPostAction}>
      <input
        type="text"
        name="post-name"
        className="p-4 text-xl text-black"
        required
      />
      <button
        type="submit"
        className="ml-4 rounded-xl border bg-white p-4 text-black"
      >
        Submit
      </button>
    </form>
  );
}
