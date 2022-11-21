// Gravity Flip

function flip (a,d) {
    if (d==='R') {
        return a.sort((a,b)=>a-b);
    } else {
        return a.sort((a,b)=>b-a);
    }
}
