import { NextRequest, NextResponse } from 'next/server';
import { createArticleSchema } from '@/utils/validationSchemas';
import { CreateArticleDto } from '@/utils/dtos';
import { Article } from '@prisma/client';
import prisma from '@/utils/db';

/**
 *  @method  GET
 *  @route   ~/api/articles
 *  @desc    Get All Articles
 *  @access  public
 */
export async function GET(request: NextRequest) {
  try {
    const articles = await prisma.article.findMany();
    return NextResponse.json(articles, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    )
  }
}


/**
 *  @method  POST
 *  @route   ~/api/articles
 *  @desc    Create New Article
 *  @access  public
 */
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as CreateArticleDto;

    const validation = createArticleSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ message: validation.error.errors[0].message }, { status: 400 });
    }

    const newArticle: Article = await prisma.article.create({
      data: {
        title: body.title,
        description: body.description
      }
    });

    return NextResponse.json(newArticle, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    )
  }
}