        import { Injectable, NotFoundException } from '@nestjs/common';

export type User = {
    id: number;
    name: string;
    email: string;
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
};

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            role: 'INTERN',
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            role: 'ENGINEER',
        },
        {
            id: 3,
            name: 'Mike Johnson',
            email: 'mike.johnson@example.com',
            role: 'ADMIN',
        },
        {
            id: 4,
            name: 'Emily Brown',
            email: 'emily.brown@example.com',
            role: 'ENGINEER',
        },
        {
            id: 5,
            name: 'Chris Lee',
            email: 'chris.lee@example.com',
            role: 'ENGINEER',
        },
        {
            id: 6,
            name: 'Sarah Wilson',
            email: 'sarah.wilson@example.com',
            role: 'INTERN',
        },
        {
            id: 7,
            name: 'David Taylor',
            email: 'david.taylor@example.com',
            role: 'ENGINEER',
        },
        {
            id: 8,
            name: 'Lisa Anderson',
            email: 'lisa.anderson@example.com',
            role: 'ADMIN',
        },
        {
            id: 9,
            name: 'Robert Martinez',
            email: 'robert.martinez@example.com',
            role: 'INTERN',
        },
        {
            id: 10,
            name: 'Amanda Clark',
            email: 'amanda.clark@example.com',
            role: 'ENGINEER',
        },
    ];

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'): User[] {
        if (role) {
            console.log(role);
            return this.users.filter(user => user.role === role);
        }
        return this.users;
    }

    findOne(id: number): User {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }

    create(user: User): User {
        this.users.push(user);
        return user;
    }

    update(id: number, user: User): User {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1) {
            throw new NotFoundException('User not found');  
        }
        this.users[index] = user;
        return user;
    }

    delete(id: number): void {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1) { 
            throw new NotFoundException('User not found');
        }
        this.users.splice(index, 1);
    }
}
