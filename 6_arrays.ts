// arrays

let num_array: number[] = [1,2,3,4];
let str_array: string[] = ['ranil','mahinda','gota'];
let str_num_array: (number | string)[] = [1,2,'ranil',3,'mahinda','gota'];

let student1 = { id: 1, name: 'kavindu', age: 28, faculty: 'CSE'};
let student2 = { id: 2, name: 'sachini', age: 22, faculty: 'TONIC'};

let students:  {id: number; name: string; age: number; faculty: string, uni?: string}[]=[];

students.push(student1);
students.push(student2);
