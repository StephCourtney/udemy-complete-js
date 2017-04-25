
// switches
var job = 'teacher';

switch(job) {
    case 'teacher':
        console.log('Teacher');
        break;
    case 'driver':
        console.log('Driver');
        break;
    case 'cop':
        console.log('Cop');
        break;
    default:
        console.log('Something else');
}

// Challange 1
var p1_height = 100;
var p2_height = 96;
var p1_age = 10;
var p2_age = 11;

var p1_total = p1_height + (p1_age*5);
var p2_total = p2_height + (p2_age*5);

if(p1_total > p2_total) {
    console.log('Player 1 wins');
} else if( p1_total === p2_total) {
    console.log('Draw');
}
else {
    console.log('Player 2 wins');
}