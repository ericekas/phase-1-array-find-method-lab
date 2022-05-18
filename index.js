
function superbowlWin(array) {
    const winningElement = array.find((element) => element.result === 'W')
    return(winningElement === undefined? undefined : winningElement.year)
}

