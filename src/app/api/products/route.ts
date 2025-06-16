import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

// GET /api/products
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
      },
    })
    return NextResponse.json(products)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}

// POST /api/products
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    // Check if user is authenticated and is an admin
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { name, description, price, images, stock, sku, categoryId } = body

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price,
        images,
        stock,
        sku,
        categoryId,
      },
      include: {
        category: true,
      },
    })

    return NextResponse.json(product)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    )
  }
} 