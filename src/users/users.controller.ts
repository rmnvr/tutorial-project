import { Controller } from '@nestjs/common';

@Controller('users')
export class UsersController {
/*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
*/

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(id);
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }
}
