import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { PostService } from './post.service';
import { JwtAuthGuard } from '../../common/guards/auth.guard';

@Controller('post')
@UseGuards(JwtAuthGuard)
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Request() req, @Body() data: any) {
    return this.postService.create(req.user.id, data);
  }

  @Get()
  findAll(@Request() req) {
    return this.postService.findAll(req.user.id);
  }
}
