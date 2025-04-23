// app.ts
import { Team, Arena } from './interfaces';
import * as readlineSync from 'readline-sync';
import * as fs from 'fs';

// Read the JSON files
const teamData: Team[] = JSON.parse(fs.readFileSync('Json1.json', 'utf-8'));
const arenaData: Arena[] = JSON.parse(fs.readFileSync('json2.json', 'utf-8'));

// Function to display all teams and their arenas
function displayAllData(): void {
  console.log("Teams and their Arenas:");
  teamData.forEach((team) => {
    console.log(`- ${team.name} (${team.id})`);
    console.log(`  Arena: ${team.arena.name} | Location: ${team.arena.location} | Capacity: ${team.arena.capacity}`);
    console.log(`  Championships: ${team.championships} | Founded: ${team.foundedYear}`);
    console.log(`  Active: ${team.isActive ? "Yes" : "No"}`);
    console.log(`  Players: ${team.players.join(", ")}`);
    console.log();
  });
}

// Function to filter teams by ID
function filterById(id: string): void {
  const team = teamData.find((team) => team.id === id);

  if (team) {
    console.log(`- ${team.name} (${team.id})`);
    console.log(`  Description: ${team.description}`);
    console.log(`  Founded Year: ${team.foundedYear}`);
    console.log(`  Championships: ${team.championships}`);
    console.log(`  Active: ${team.isActive ? "Yes" : "No"}`);
    console.log(`  Arena: ${team.arena.name} | Location: ${team.arena.location}`);
    console.log(`  Players: ${team.players.join(", ")}`);
  } else {
    console.log("No team found with this ID.");
  }
}

// Main menu function
function mainMenu(): void {
  let exit = false;

  while (!exit) {
    console.log("Welcome to the JSON data viewer!");
    console.log("1. View all data");
    console.log("2. Filter by ID");
    console.log("3. Exit");

    const choice = readlineSync.question("Please enter your choice: ");

    switch (choice) {
      case "1":
        displayAllData();
        break;
      case "2":
        const id = readlineSync.question("Please enter the ID you want to filter by: ");
        filterById(id);
        break;
      case "3":
        console.log("Goodbye!");
        exit = true;
        break;
      default:
        console.log("Invalid choice, please try again.");
    }
  }
}

// Run the application
mainMenu();
