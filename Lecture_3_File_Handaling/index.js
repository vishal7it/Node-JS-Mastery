import { readFile, writeFile, appendFile, mkdir } from "fs/promises"

//read file

const read_file = async (fileName) => {
    const data = await readFile(fileName, 'utf-8');
    console.log(data);
}

// read_file('sample.txt');


//write file

const createFile = async (fileName, content) => {
    await writeFile(fileName, content);
    console.log("File created succesfully");
}

// createFile('ai.py', 'this is a testing file');
// createFile('ai.jsx', 'it is a react liberary file');

//append file

const append_file = async (filename, content) => {
    await appendFile(filename, content);
    console.log("File appended succesfully")

}

// append_file('ai.py', ' Hello again we met again')


//create file using mkdir module

const create_dir = async (dir) => {
    await mkdir(dir, { recursive: true })
}

// create_dir('private')
create_dir('src/py/nodejs')