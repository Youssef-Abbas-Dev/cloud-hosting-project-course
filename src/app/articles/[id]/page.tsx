//import { getSingleArticle } from "@/apiCalls/articleApiCall";
import AddCommentForm from "@/components/comments/AddCommentForm";
import CommentItem from "@/components/comments/CommentItem";
import { SingleArticle } from "@/utils/types";
import { cookies } from "next/headers";
import { verifyTokenForPage } from "@/utils/verifyToken";
import prisma from "@/utils/db";
import { redirect } from "next/navigation";

interface SingleArticlePageProps {
    params: { id: string }
}

const SingleArticlePage = async ({ params }: SingleArticlePageProps) => {
    const token = cookies().get("jwtToken")?.value || "";
    const payload = verifyTokenForPage(token);

    //const article: SingleArticle = await getSingleArticle(params.id);

    const article = await prisma.article.findUnique({
        where: { id: parseInt(params.id) },
        include: {
            comments: {
                include: {
                    user: {
                        select: {
                            username: true,
                        }
                    }
                },
                orderBy: {
                    createdAt: 'desc'
                }
            }
        }
    }) as SingleArticle;

    if(!article){
       redirect("/not-found");
    }
   
    return (
        <section className="fix-height container m-auto w-full px-5 pt-8 md:w-3/4">
            <div className="bg-white p-7 rounded-lg mb-7">
                <h1 className="text-3xl font-bold text-gray-700 mb-2">
                    {article.title}
                </h1>
                <div className="text-gray-400">
                    {new Date(article.createdAt).toDateString()}
                </div>
                <p className="text-gray-800 text-xl mt-5">{article.description}</p>
            </div>
            <div className="mt-7">
                {payload ? (
                    <AddCommentForm articleId={article.id} />
                ) : (
                    <p className="text-blue-600 md:text-xl">
                        to write a comment you should log in first
                    </p>
                )}
            </div>
            <h4 className="text-xl text-gray-800 ps-1 font-semibold mb-2 mt-7">
                Comments
            </h4>
            {article.comments.map(comment => (
                <CommentItem key={comment.id} comment={comment} userId={payload?.id} />
            ))}
        </section>
    )
}

export default SingleArticlePage;