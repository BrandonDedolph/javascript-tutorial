marksMass = 78;
marksHeight = 1.69;
johnsMass = 92;
johnsHeight = 1.95;

markBMI = marksMass / marksHeight ** 2;
johnBMI = johnsMass / johnsHeight ** 2;
markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
