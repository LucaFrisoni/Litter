import dynamic from "next/dynamic";
import { ClipLoader } from "react-spinners";

const Header = dynamic(() => import("./components/Header"), {
  loading: () => (
    <div className=" flex justify-center items-center h-full">
      <ClipLoader color="lightblue" size={80} />
    </div>
  ),
});

const Form = dynamic(() => import("./components/Form"), {
  loading: () => (
    <div className=" flex justify-center items-center h-full">
      <ClipLoader color="lightblue" size={80} />
    </div>
  ),
});

const PostFeed = dynamic(() => import("./components/posts/PostFeed"), {
  loading: () => (
    <div className=" flex justify-center items-center h-full">
      <ClipLoader color="lightblue" size={80} />
    </div>
  ),
});

export default function Home() {
  return (
    <>
      <Header label="Home" />
      <Form placeholder="What`s happening?" />
      <PostFeed />
    </>
  );
}
