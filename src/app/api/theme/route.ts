import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  console.log('route.ts: GET /api/theme');
  const { searchParams } = new URL(request.url);
  const theme = searchParams.get('theme');

  if (!['light', 'dark'].includes(theme || '')) {
    console.log('route.ts Invalid theme');
    return new NextResponse('Invalid theme', { status: 400 });
  }

  const response = NextResponse.redirect(new URL('/', request.url));
  console.log('route.ts Setting theme:', theme);
  response.cookies.set('theme', theme ?? 'light', { path: '/' });

  return response;
}
