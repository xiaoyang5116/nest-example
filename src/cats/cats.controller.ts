import { Controller, Get, Header, HttpCode, Param, Post, Query, Redirect } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }
  // findOne(@Param() params): string{
  //   return `This action returns a #${params.id} cat`;
  // }


  // 重定向
  @Get('docs')
  @Redirect('https://docs.nestjs.cn/', 302)
  getDocs(@Query('version') version: string) {
    if (version && version === '8') {
      return { url: 'https://docs.nestjs.cn/8/introduction' };
    }
  }

  @Post()
  // @HttpCode(204)
  // @Header('Cache-Control', 'none')
  create(): string {
    return "This action adds a new cat"
  }

  @Get('ab*d')
  findAll(): string {
    return "This action returns all cats"
  }
}
