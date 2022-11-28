import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';

import { AuthLoginDto } from './auth-login.dto';
import { AuthService } from './auth.service';
import { JwtGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  
  @Post()
  async login(@Body() authLoginDto: AuthLoginDto) {
    return this.authService.login(authLoginDto);
  }

  @UseGuards(JwtGuard)
  @Get()
  async test() {
    return 'success login'
  }
}
