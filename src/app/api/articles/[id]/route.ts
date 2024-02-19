import { NextRequest, NextResponse } from 'next/server';
import { articles } from '@/utils/data';
import { UpdateArticleDto } from '@/utils/dtos';
import prisma from '@/utils/db';

interface Props {
    params: { id: string }
}

/**
 *  @method  GET
 *  @route   ~/api/articles/:id
 *  @desc    Get Single Article By Id
 *  @access  public
 */
export async function GET(request: NextRequest, { params }: Props) {
    try {
        const article = await prisma.article.findUnique({ where: { id: parseInt(params.id) } });
        if (!article) {
            return NextResponse.json({ message: 'article not found' }, { status: 404 });
        }

        return NextResponse.json(article, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "internal server error" },
            { status: 500 }
        );
    }
}


/**
 *  @method  PUT
 *  @route   ~/api/articles/:id
 *  @desc    Update Article
 *  @access  public
 */
export async function PUT(request: NextRequest, { params }: Props) {
    const article = articles.find(a => a.id === parseInt(params.id));
    if (!article) {
        return NextResponse.json({ message: 'article not found' }, { status: 404 });
    }

    const body = (await request.json()) as UpdateArticleDto;
    console.log(body);

    return NextResponse.json({ message: 'article updated' }, { status: 200 });
}

/**
 *  @method  DELETE
 *  @route   ~/api/articles/:id
 *  @desc    Delete Article
 *  @access  public
 */
export async function DELETE(request: NextRequest, { params }: Props) {
    const article = articles.find(a => a.id === parseInt(params.id));
    if (!article) {
        return NextResponse.json({ message: 'article not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'article deleted' }, { status: 200 });
}