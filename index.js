var readlineSync = require('readline-sync');
var Nooflines = readlineSync.question(" Enter no of lines ");
for (i = Nooflines; i >= 1; i--) {
  for (j =1; j <= i; j++) {
    process.stdout.write("*")
  }
  console.log(" ");
}