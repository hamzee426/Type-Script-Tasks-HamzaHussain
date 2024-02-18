const fs = require('fs');

function createTaskFoldersAndFiles(start, end) {
    for (let i = start; i <= end; i++) {
        const folderName = `Task${i}`;
        const fileName = `main.ts`;

        // Create folder
        fs.mkdirSync(folderName);

        // Create main.ts file inside the folder
        fs.writeFileSync(`${folderName}/${fileName}`, '');
    }

    console.log(`Folders and files created successfully from Task${start} to Task${end}.`);
}

// Example: Create folders and files from Task17 to Task45
createTaskFoldersAndFiles(17, 45);
