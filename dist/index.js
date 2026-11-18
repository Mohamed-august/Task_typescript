"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    id;
    name;
    email;
    password;
    phone;
    age;
    usernotes = [];
    constructor(id, name, email, password, phone, age, userNotes = []) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
        this.usernotes = userNotes;
    }
    setAge(age) {
        if (age < 18 || age > 60) {
            console.log("Age must be between 18 and 60");
            return;
        }
        this.age = age;
        return this.age;
    }
    displayInfo() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}, Age: ${this.age}`);
    }
}
class Admin extends User {
    manageNotes(note, action) {
        console.log(`Admin ${this.name} performed ${action} on note ${note.title}.`);
    }
}
class Note {
    id;
    title;
    content;
    // userId:User => reference and it should be called in the constructor but I can't call two properties of type User in one constructor
    noteAuthor;
    constructor(id, title, content, noteAuthor) {
        this.id = id;
        this.title = title;
        this.content = content;
        // this.userId = userId => refererence
        this.noteAuthor = noteAuthor;
    }
    preview() {
        console.log(this.content);
    }
    showAuthor() {
        console.log(`${this.content} has an author called #${this.noteAuthor.id} and title ${this.title}`);
    }
}
class NoteBook {
    notes = [];
    constructor(initialNotes = []) {
        this.notes = initialNotes;
    }
    addNote(note) {
        this.notes.push(note);
    }
    removeNote(id) {
        this.notes = this.notes.filter(n => n.id !== id);
    }
    getNotes() {
        return this.notes;
    }
}
class Storage {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter((i) => i !== item);
    }
    getAllItems() {
        return this.items;
    }
}
//# sourceMappingURL=index.js.map