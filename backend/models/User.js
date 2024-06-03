class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    static findById(id) {
        // Simulate database lookup
        return new User(id, 'John Doe', 'john.doe@example.com');
    }
}

module.exports = User;
