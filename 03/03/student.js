let kor = 50;
let eng = 60;
let mat = 70;

let student1 = {
    no:1, 
    name:'머스크', 
    kor:90, 
    eng:80, 
    mat:100, 
    total:function() {
        return this.kor+this.eng+this.mat;
    },
    avg : function() {
        return this.total() / 3
    },
    toString : function() {
        return `이름 : ${this.name}, 총점 : ${this.total()}, 평균 : ${this.avg()}`;
    }
};
let student2 = {
    no:2, 
    name:'주커버그', 
    kor:70, 
    eng:70, 
    mat:80, 
    total:function() {
        return this.kor+this.eng+this.mat;
    },
    avg : function() {
        return this.total() / 3
    },
    toString : function() {
        return `이름 : ${this.name}, 총점 : ${this.total()}, 평균 : ${this.avg()}`;
    }
};
// 평균
// toString >> 이름, 총점, 평균


// console.log(student1.toString());
// 브라우저용

const students = [];
students.push(student1);
students.push(student2);


students.push({
    no:3, 
    name:'빌게이츠', 
    kor:60, 
    eng:100, 
    mat:100, 
    total:function() {
        return this.kor+this.eng+this.mat;
    },
    avg : function() {
        return this.total() / 3
    },
    toString : function() {
        return `이름 : ${this.name}, 총점 : ${this.total()}, 평균 : ${this.avg()}`;
    }
});
console.log(students);

function Student(no, name, kor, eng, mat) {
    // let _no = no;

    // this.setNo = function(no) {
    //     _no = no;
    // }
    // this.getNo = function() {
    //     return _no;
    // }

    this.no = no;
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.mat = mat;
    this.total = function() {
        return this.kor+this.eng+this.mat;
    }
    this.avg = function() {
        return this.total() / 3
    }
    this.toString = function() {
        return `이름 : ${this.name}, 총점 : ${this.total()}, 평균 : ${this.avg()}`;
    }
}

const now = new Date();
const student3 = new Student(4, '이재용', 100, 60, 60);
students.push(student3);
students.push(new Student(5, '발머', 100, 100, 70));


for(let i = 0 ; i < students.length ; i++) {
    console.log(students[i].total());
}

Student.a = 10;
console.log(Student.a);
// 프로토타입 >> 객체의 공간
// console.log.prototype
Student.prototype.area = 20;

const student4 = new Student(6, '워즈니악', 90, 100, 100);
console.log(student4.area);
console.log(student4.a);

