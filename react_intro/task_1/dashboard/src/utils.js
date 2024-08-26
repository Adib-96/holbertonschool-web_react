function getFullYear() {
    return new Date().getFullYear();
}

function getFooterCopy(isIndex) {
    return isIndex ? 'Holberton School' : 'Holberton School Main Dashboard'
  }



export {getFullYear,getFooterCopy}