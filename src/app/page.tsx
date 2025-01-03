import Image from "next/image";
import Blog from "./blog/page";
import Comment from "@/components/comment";
import CommentsSection from "@/components/CommentSec";

export default function Home() {
  return (
 <div>
  <Blog/>
  <br />
  <CommentsSection/>
 </div>
  );
}
