import Image from "next/image";
import Blog from "./blog/page";
import Comment from "@/components/comment";

export default function Home() {
  return (
 <div>
  <Blog/>
  <br />
  <Comment/>
 </div>
  );
}
