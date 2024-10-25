// Define the User interface
interface User {
    id: number;
    name: string;
    email: string;
}

// Define the UserManager class
class UserManager {
    private users: User[] = []; // Array to hold users
    private nextId: number = 1;  // Counter for the next user ID

    // Method to add a user
    addUser(name: string, email: string): User {
        const newUser: User = {
            id: this.nextId++, // Assign current ID and increment for next user
            name,
            email,
        };
        this.users.push(newUser); // Add new user to the array
        return newUser; // Return the added user
    }

    // Method to find a user by ID
    findUserById(id: number): User | undefined {
        return this.users.find(user => user.id === id); // Return user if found, otherwise undefined
    }

    // Method to delete a user by ID
    deleteUser(id: number): boolean {
        const index = this.users.findIndex(user => user.id === id); // Find index of the user
        if (index !== -1) {
            this.users.splice(index, 1); // Remove user from the array
            return true; // Return true if deletion was successful
        }
        return false; // Return false if user was not found
    }

    // Method to get all users
    getAllUsers(): User[] {
        return this.users; // Return array of all users
    }
}

// Example usage
const userManager = new UserManager(); // Create a new instance of UserManager
const user1 = userManager.addUser('Alice', 'alice@example.com'); // Add user Alice
const user2 = userManager.addUser('Bob', 'bob@example.com'); // Add user Bob

console.log('All users:', userManager.getAllUsers()); // Log all users

const foundUser = userManager.findUserById(user1.id); // Find user by ID
console.log('Found user:', foundUser); // Log the found user

const isDeleted = userManager.deleteUser(user2.id); // Delete user Bob
console.log('User Bob deleted:', isDeleted); // Log whether Bob was deleted

console.log('Users after deletion:', userManager.getAllUsers()); // Log all users after deletion
