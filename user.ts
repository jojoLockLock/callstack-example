// 定义用户接口
interface User {
    id: number;
    name: string;
    email: string;
}

// 定义用户管理类
class UserManager {
    private users: User[] = [];
    private nextId: number = 1;

    // 添加用户
    addUser(name: string, email: string): User {
        const newUser: User = {
            id: this.nextId++,
            name,
            email,
        };
        this.users.push(newUser);
        return newUser;
    }

    // 查找用户
    findUserById(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    // 删除用户
    deleteUser(id: number): boolean {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            this.users.splice(index, 1);
            return true;
        }
        return false;
    }

    // 获取所有用户
    getAllUsers(): User[] {
        return this.users;
    }
}

// 使用示例
const userManager = new UserManager();
const user1 = userManager.addUser('Alice', 'alice@example.com');
const user2 = userManager.addUser('Bob', 'bob@example.com');

console.log('所有用户:', userManager.getAllUsers());

const foundUser = userManager.findUserById(user1.id);
console.log('找到的用户:', foundUser);

const isDeleted = userManager.deleteUser(user2.id);
console.log('用户 Bob 被删除:', isDeleted);

console.log('删除后的所有用户:', userManager.getAllUsers());
