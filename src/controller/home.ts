import { Controller, Get, Provide } from '@midwayjs/decorator';

@Provide()
@Controller('/')
export class HomeController {
  @Get('/')
  async home() {
    const user: CustomUser = {
      name: 'cap',
    };
    return user;
  }
}
