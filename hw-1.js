const folders = [{
    id: 5,
    name: 'Klasör 1',
    files: [{
            id: 17,
            name: 'profil.jpg'
        },
        {
            id: 18,
            name: 'manzara.jpg'
        },
    ],
},
{
    id: 6,
    name: 'Klasör 2',
    files: [{
            id: 21,
            name: 'foto.png'
        },
        {
            id: 22,
            name: 'dosya.xls'
        },
    ],
},
{
    id: 7,
    name: 'Klasör 3',
},
]

// utilities functions:
function findSourceFolder(source) { // this function locates the source folder and returns it
return folders.find(folders => folders.files && folders.files.find(file => file.id === source));
}

function findTargetFolder(target) { // this function locates the target folder and returns it
return folders.find(folders => folders.id === target);
}

function findFile(source) { // this function locates the source file in the source folder and returns it
return findSourceFolder(source).files.find(file => file.id === source);
}

// PARENT FOLDER OF FUNCTION

function parentFolderOf(source) {
    return findSourceFolder(source) ? findSourceFolder(source) : -1
    }

// REMOVE FUNCTION

function remove(source) {
    if (findSourceFolder(source)) { // checks if there exists a source file
        const sourceIndex = findSourceFolder(source).files.indexOf(file => file.id === source); // finds the index of the source file
        findSourceFolder(source).files.splice(sourceIndex, 1) // removes it from the files array with the help of the index
    }
    }

// COPY FUNCTION

function copy(source, target) {
if (findSourceFolder(source) && findTargetFolder(target)) { // checks if there exists a target and source file
    findTargetFolder(target).files = (findTargetFolder(target).files) ? findTargetFolder(target).files : []; // creates an empty array if there is no files key in the target folder
    findTargetFolder(target).files.push(findFile(source)); // adds the source file into the target folders file
}
}

// REMOVE FOLDER FUNCTION

function removeFolder(source) {
    const sourceIndex = folders.findIndex(folder => folder.id === source); // finds the index of the source folder
    sourceIndex !== -1 && folders.splice(sourceIndex, 1); // removes it if it exists
    }

// MOVE FUNCTION

function move(source, target) {
if (findSourceFolder(source) && findTargetFolder(target)) { // checks if there exists a target and source file
    const sourceIndex = findSourceFolder(source).files.findIndex(file => file.id === source); // finds the index of the source file 
    findTargetFolder(target).files = (findTargetFolder(target).files) ? findTargetFolder(target).files : []; // creates an empty array if there is no files key in the target folder
    const sourceFile = findSourceFolder(source).files.splice(sourceIndex, 1)[0]; // creates an array consisting of the source file and deletes it from its array
    findTargetFolder(target).files.push(sourceFile); // adds the source file into the target folders file
}
}